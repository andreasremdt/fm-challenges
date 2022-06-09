import type { ReactNode } from "react";

import * as Styled from "./header.styled";

type HeaderProps = {
  children: ReactNode;
};

function Header({ children }: HeaderProps) {
  return (
    <Styled.Header>
      <Styled.Logo aria-hidden="true">devjobs</Styled.Logo>

      {children}
    </Styled.Header>
  );
}

export default Header;
