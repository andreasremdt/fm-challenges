import type { ReactNode } from "react";

import * as Styled from "./heading.styled";

type HeadingProps = {
  children: ReactNode;
  level?: "h1" | "h2" | "h3" | "h4";
  as?: "h1" | "h2" | "h3" | "h4";
};

function Heading({ children, level = "h1", as = level, ...props }: HeadingProps) {
  return (
    <Styled.Wrapper as={as} level={level} {...props}>
      {children}
    </Styled.Wrapper>
  );
}

export default Heading;
