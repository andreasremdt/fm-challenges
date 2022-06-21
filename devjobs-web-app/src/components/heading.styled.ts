import styled from "styled-components";

export const Wrapper = styled.h1<{ level: "h1" | "h2" | "h3" | "h4" }>`
  margin: unset;

  ${(props) => {
    return `
      font-size: ${props.theme.fontSizes[props.level]};
      line-height: ${props.theme.lineHeights[props.level]};
    `;
  }};
`;
