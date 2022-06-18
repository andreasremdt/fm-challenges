import styled from "styled-components";

export const Wrapper = styled.figure<{ size: "small" | "large"; bg: string }>`
  margin: unset;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  background-color: ${(props) => props.bg};

  ${(props) => {
    if (props.size === "small") {
      return `
        width: 50px;
      `;
    }

    return `
      height: 100%;

      img {
        max-width: 60%;
        max-height: 60%;
        width: 100%;
      }
    `;
  }}
`;
