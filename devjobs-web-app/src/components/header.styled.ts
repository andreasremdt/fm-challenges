import styled from "styled-components";

export const Header = styled.header`
  height: 160px;
  display: flex;
  padding-inline: 165px;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  background: transparent url(/desktop/bg-pattern-header.svg) no-repeat center;
`;

export const Logo = styled.span`
  margin-right: auto;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.h1};
  line-height: ${(props) => props.theme.lineHeights.h1};
`;
