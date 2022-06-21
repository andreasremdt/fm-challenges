import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      headings: {
        text: string;
        hover: {
          text: string;
        };
      };
      element: string;
      violet: string;
      lightViolet: string;
      grey: string;
      darkGrey: string;
      white: string;
      inputs: {
        placeholder: string;
        text: string;
        border: string;
      };
      checkbox: {
        background: string;
      };
      buttons: {
        primary: {
          background: string;
          text: string;
          hover: {
            background: string;
            text: string;
          };
        };
        secondary: {
          background: string;
          text: string;
          hover: {
            background: string;
            text: string;
          };
        };
        transparent: {
          background: string;
          text: string;
          hover: {
            background: string;
            text: string;
          };
        };
      };
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
