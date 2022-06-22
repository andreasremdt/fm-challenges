import type { ComponentPropsWithoutRef } from "react";

import * as Styled from "./checkbox.styled";

function Checkbox({ children, ...props }: ComponentPropsWithoutRef<"input">) {
  return (
    <Styled.Wrapper>
      <Styled.Input type="checkbox" {...props} />

      <Styled.Background />

      {children}
    </Styled.Wrapper>
  );
}

export default Checkbox;
