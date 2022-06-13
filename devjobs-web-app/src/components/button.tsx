import type { ComponentPropsWithoutRef } from "react";
import * as Styled from "./button.styled";

type ButtonProps = {
  variant?: "primary" | "secondary";
} & ComponentPropsWithoutRef<"button">;

function Button({ variant = "primary", ...props }: ButtonProps) {
  return <Styled.Button variant={variant} {...props} />;
}

export default Button;
