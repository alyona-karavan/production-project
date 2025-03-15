// @ts-ignore
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config: originalConfig }: {config: webpack.Configuration}) => {
    const config = { ...originalConfig };
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };
    if (config.resolve) {
        // @ts-ignore
        config.resolve.modules.push(paths.src);
        // @ts-ignore
        config.resolve.extensions.push('.ts', '.tsx');
    }

    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    // @ts-ignore
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    // @ts-ignore
    config.module.rules.push(buildCssLoader(true));

    // @ts-ignore
    config.plugins.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.ru'),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
