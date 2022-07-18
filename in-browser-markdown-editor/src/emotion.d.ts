import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      white: string;
      orange300: string;
      orange400: string;
    };

    fonts: {
      serif: string;
      sans: string;
      mono: string;
    };
  }
}
