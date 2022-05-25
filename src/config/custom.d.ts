declare module '*.svg' { //import svg icons for typescript files
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module '*.jpg';
declare module '*.png';