import { DefaultTheme } from "styled-components";

const lightColors = {
  background: "#F4F6F8",
  element: "#FFFFFF",
};

const darkColors = {
  background: "#121721",
  element: "#19202D",
};

export default function getTheme(isDark: boolean): DefaultTheme {
  return {
    colors: Object.assign(
      {},
      {
        violet: "#5964E0",
        lightViolet: "#939BF4",
        grey: "#9DAEC2",
        darkGrey: "#6E8098",
        white: "#FFFFFF",
      },
      isDark ? darkColors : lightColors
    ),

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
