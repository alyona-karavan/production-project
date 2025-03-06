/* eslint-disable no-unused-vars */
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const styles: IClassNames;
    export = styles;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'storybook' | 'jest' | 'frontend';

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
    } : T;

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
