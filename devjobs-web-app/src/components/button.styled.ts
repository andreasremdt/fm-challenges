import styled from "styled-components";

export const Button = styled.button<{ variant: "primary" | "secondary" }>`
  font-weight: bold;
  border-radius: 5px;
  height: 48px;
  padding-inline: 40px;
  display: inline-flex;
  align-items: center;
  font-family: inherit;
  font-size: inherit;
  border: none;
  cursor: pointer;
  outline: none;

  ${(props) => `
    background-color: ${props.theme.colors.buttons[props.variant].background};
    color: ${props.theme.colors.buttons[props.variant].text};

    &:hover {
      background-color: ${props.theme.colors.buttons[props.variant].hover.background};
      color: ${props.theme.colors.buttons[props.variant].hover.text};
    }

    &:focus-visible {
      outline: 2px solid ${props.theme.colors.violet};
      outline-offset: 2px;
    }
  `}
  }}
`;
