import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  height: 160px;
  width: clamp(16rem, 98vw, 1440px);
  margin-inline: auto;
  color: ${(props) => props.theme.colors.white};
  background: transparent url(/desktop/bg-pattern-header.svg) no-repeat center;
`;

export const Logo = styled(Link)`
  margin-right: auto;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.h1};
  line-height: ${(props) => props.theme.lineHeights.h1};
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
  max-width: 1110px;
  margin-inline: auto;
`;
