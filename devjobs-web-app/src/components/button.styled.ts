import styled from "styled-components";

export const Button = styled.button<{ variant?: "primary" | "secondary" | "transparent" }>`
  font-weight: bold;
  border-radius: 0.3125rem;
  height: 3rem;
  padding-inline: 2rem;
  display: inline-flex;
  align-items: center;
  font-family: inherit;
  font-size: inherit;
  border: none;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  white-space: nowrap;

  ${(props) => `
    background-color: ${props.theme.colors.buttons[props.variant || "primary"].background};
    color: ${props.theme.colors.buttons[props.variant || "primary"].text};

    &:hover {
      background-color: ${props.theme.colors.buttons[props.variant || "primary"].hover.background};
      color: ${props.theme.colors.buttons[props.variant || "primary"].hover.text};
    }

    &:focus-visible {
      outline: 2px solid ${props.theme.colors.violet};
      outline-offset: 2px;
    }
  `}
  }}
`;
