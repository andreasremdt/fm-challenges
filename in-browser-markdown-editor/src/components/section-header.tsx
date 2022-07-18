import styled from "@emotion/styled";
import type { ReactNode } from "react";

type Props = {
  title: string;
  children?: ReactNode;
};

const Header = styled.header`
  height: 42px;
  background-color: ${(props) => props.theme.colors.gray100};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
`;

const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.sans};
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.gray400};
`;

function SectionHeader({ title, children, ...props }: Props) {
  return (
    <Header {...props}>
      <Title>{title}</Title>
      {children}
    </Header>
  );
}

export default SectionHeader;
