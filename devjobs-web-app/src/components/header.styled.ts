import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  height: 160px;
  width: clamp(16rem, 100vw, 1440px);
  margin-inline: auto;
  padding-inline: 40px;
  color: ${(props) => props.theme.colors.white};
  background: transparent url(/desktop/bg-pattern-header.svg) no-repeat left top;

  @media (max-width: 768px) {
    background-image: url(/tablet/bg-pattern-header.svg);
  }

  @media (max-width: 600px) {
    padding-inline: 24px;
    background-image: url(/mobile/bg-pattern-header.svg);
    background-size: cover;
    height: 136px;
  }
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

  @media (max-width: 600px) {
    padding-top: 33px;
  }
`;
