import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      element: string;
      violet: string;
      lightViolet: string;
      grey: string;
      darkGrey: string;
      white: string;
    };

    fontSizes: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      p: string;
    };

    lineHeights: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      p: string;
    };
  }
}
