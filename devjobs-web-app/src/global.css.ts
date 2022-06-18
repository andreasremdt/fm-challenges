import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    transition: background-color .1s linear, color .1s linear;
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

  h1, h2, h3 {
    color: ${(props) => props.theme.colors.headings.text};
  }

  p, ul, li {
    line-height: ${(props) => props.theme.lineHeights.p};
  }

  li {
    margin-bottom: 14px;
  }
`;
