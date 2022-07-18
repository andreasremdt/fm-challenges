import styled from "@emotion/styled";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isMenuOpen: boolean;
};

const Wrapper = styled.main<{ isMenuOpen: boolean }>`
  display: grid;
  transition: grid-template-columns 0.25s ease-out;
  grid-template-columns: ${(props) => (props.isMenuOpen ? "250px" : "0")} auto;
  grid-template-rows: 72px auto;
  grid-template-areas:
    "navigation header"
    "navigation content";
  min-height: 100vh;
`;

function Container({ children, isMenuOpen }: Props) {
  return <Wrapper isMenuOpen={isMenuOpen}>{children}</Wrapper>;
}

export default Container;
