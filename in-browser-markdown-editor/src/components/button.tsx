import styled from "@emotion/styled";
import type { ComponentPropsWithoutRef } from "react";

type Props = {} & ComponentPropsWithoutRef<"button">;

const Component = styled.button`
  background-color: ${(props) => props.theme.colors.orange400};
  color: ${(props) => props.theme.colors.white};
  height: 2.5rem;
  font-size: 15px;
  font-weight: 400;
  border: unset;
  border-radius: 4px;
  font-family: ${(props) => props.theme.fonts.sans};
  padding-inline: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  appearance: none;
  transition: background-color 0.05s linear;
  cursor: pointer;

  &:where(:hover, :focus-visible) {
    background-color: ${(props) => props.theme.colors.orange300};
    outline: none;
  }
`;

function Button({ children, ...props }: Props) {
  return <Component {...props}>{children}</Component>;
}

export default Button;
