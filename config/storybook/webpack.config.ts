import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    if (!config.module) {
        // eslint-disable-next-line no-param-reassign
        config.module = { rules: [] };
    }

    if (config.module.rules) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules
            .filter((rule): rule is RuleSetRule => !!rule && typeof rule === 'object')
            .map((rule: RuleSetRule) => {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }
                return rule;
            });
    }

    config.module.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module.rules?.push(buildCssLoader(true));

    return config;
};
