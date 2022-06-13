import { DefaultTheme } from "styled-components";

const colors = {
  violet: "hsla(235, 69%, 61%, 1)",
  lightViolet: "hsla(235, 82%, 77%, 1)",
  grey: "hsla(212, 23%, 69%, 1)",
  darkGrey: "hsla(214, 17%, 51%, 1)",
  white: "hsla(0, 0%, 100%, 1)",
};

const lightColors = {
  background: "hsla(217, 26%, 97%, 1)",
  element: colors.white,
  inputs: {
    placeholder: "hsla(219, 29%, 14%, 0.5)",
    text: "hsla(219, 29%, 14%, 1)",
    border: "hsla(214, 17%, 51%, 0.2)",
  },
  checkbox: {
    background: "hsla(219, 29%, 14%, 0.1)",
  },
  buttons: {
    primary: {
      background: colors.violet,
      text: colors.white,
      hover: {
        background: colors.lightViolet,
        text: colors.white,
      },
    },
    secondary: {
      background: "hsla(235, 69%, 61%, .1)",
      text: colors.violet,
      hover: {
        background: "hsla(235, 69%, 61%, .35)",
        text: colors.violet,
      },
    },
  },
};

const darkColors = {
  background: "hsla(219, 29%, 10%, 1)",
  element: "hsla(219, 29%, 14%, 1)",
  inputs: {
    placeholder: "hsla(0, 0%, 100%, 0.5)",
    text: colors.white,
    border: "hsla(214, 17%, 51%, 0.2)",
  },
  checkbox: {
    background: "hsla(0, 0%, 100%, 0.1)",
  },
  buttons: {
    primary: {
      background: colors.violet,
      text: colors.white,
      hover: {
        background: colors.lightViolet,
        text: colors.white,
      },
    },
    secondary: {
      background: "hsla(0, 0%, 100%, .1)",
      text: colors.white,
      hover: {
        background: "hsla(0, 0%, 100%, .35)",
        text: colors.violet,
      },
    },
  },
};

export default function getTheme(isDark: boolean): DefaultTheme {
  return {
    colors: Object.assign({}, colors, isDark ? darkColors : lightColors),

    fontSizes: {
      h1: "28px",
      h2: "24px",
      h3: "20px",
      h4: "14px",
      p: "16px",
    },
    lineHeights: {
      h1: "34px",
      h2: "29px",
      h3: "24px",
      h4: "18px",
      p: "26px",
    },
  };
}
