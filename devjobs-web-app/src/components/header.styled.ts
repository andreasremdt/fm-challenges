import styled from "styled-components";
import { Link } from "react-router-dom";

import getBasePath from "@/utils/path";

export const Header = styled.header`
  height: 10rem;
  width: clamp(16rem, 100vw, 90rem);
  margin-inline: auto;
  padding-inline: 2.5rem;
  color: ${(props) => props.theme.colors.white};
  background: transparent url(${getBasePath("desktop/bg-pattern-header.svg")}) no-repeat left top;

  @media (max-width: 48rem) {
    background-image: url(${getBasePath("tablet/bg-pattern-header.svg")});
  }

  @media (max-width: 37.5rem) {
    padding-inline: 1.5rem;
    background-image: url(${getBasePath("mobile/bg-pattern-header.svg")});
    background-size: cover;
    height: 8.5rem;
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
  padding-top: 2.5rem;
  max-width: 69.375rem;
  margin-inline: auto;

  @media (max-width: 37.5rem) {
    padding-top: 2.0625rem;
  }
`;
