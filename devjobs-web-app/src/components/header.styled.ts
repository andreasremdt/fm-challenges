import styled from "styled-components";

export const Header = styled.header`
  height: 160px;
  padding-inline: 165px;
  color: ${(props) => props.theme.colors.white};
  background: transparent url(/desktop/bg-pattern-header.svg) no-repeat center;
`;

export const Logo = styled.span`
  margin-right: auto;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.h1};
  line-height: ${(props) => props.theme.lineHeights.h1};
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
`;
