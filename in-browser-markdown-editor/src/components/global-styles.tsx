import { Global, css, useTheme } from "@emotion/react";

function GlobalStyles() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        p,
        figure,
        blockquote,
        dl,
        dd {
          margin: 0;
        }

        ul[role="list"],
        ol[role="list"] {
          list-style: none;
        }

        html:focus-within {
          scroll-behavior: smooth;
        }

        body {
          min-height: 100vh;
          text-rendering: optimizeSpeed;
          font: 400 14px/1.5 ${theme.fonts.serif};
          color: ${theme.colors.gray700};
        }

        a:not([class]) {
          text-decoration-skip-ink: auto;
        }

        img,
        picture {
          max-width: 100%;
          display: block;
        }

        input,
        button,
        textarea,
        select {
          font: inherit;
        }

        @media (prefers-reduced-motion: reduce) {
          html:focus-within {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        &::selection {
          background-color: ${theme.colors.orange400};
          color: ${theme.colors.white};
        }

        @font-face {
          font-family: "Roboto Slab";
          font-display: swap;
          src: url("/fonts/roboto-slab.woff2") format("woff2 supports variations"),
            url("/fonts/roboto-slab.woff2") format("woff2-variations");
          font-weight: 100 900;
        }

        @font-face {
          font-family: "Roboto Mono";
          font-display: swap;
          src: url("/fonts/roboto-mono.woff2") format("woff2 supports variations"),
            url("/fonts/roboto-mono.woff2") format("woff2-variations");
          font-weight: 100 700;
        }

        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/roboto-regular.woff2") format("woff2");
        }

        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url("/fonts/roboto-light.woff2") format("woff2");
        }
      `}
    />
  );
}

export default GlobalStyles;
