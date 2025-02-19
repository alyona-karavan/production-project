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
