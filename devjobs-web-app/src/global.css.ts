import { createGlobalStyle } from "styled-components";

import getBasePath from "@/utils/path";

export default createGlobalStyle`
  @font-face {
    font-family: "Kumbh Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${getBasePath("fonts/kumbh-sans-regular.woff2")}) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
      U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Kumbh Sans";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${getBasePath("fonts/kumbh-sans-bold.woff2")}) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
      U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    transition: background-color .1s linear, color .1s linear;
  }

  html, body, #app {
    height: 100%;
  }

  body {
    margin: unset;
    font-family: 'Kumbh Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.darkGrey};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  input, select {
    font: inherit;
    border: none;
    appearance: none;
  }

  h1, h2, h3, h4 {
    color: ${(props) => props.theme.colors.headings.text};
  }

  p, ul, li {
    line-height: ${(props) => props.theme.lineHeights.p};
  }

  li {
    margin-bottom: 0.625rem;
  }
`;
