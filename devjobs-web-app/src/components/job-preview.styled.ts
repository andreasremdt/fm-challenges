import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "@/components/logo";
import Heading from "@/components/heading";

export const Card = styled.article`
  background-color: ${(props) => props.theme.colors.element};
  border-radius: 0.375rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-top: 1.5625rem;
`;

export const CompanyLogo = styled(Logo)`
  order: 1;
  border-radius: 0.9375rem;
  position: absolute;
  top: -1.5625rem;
  left: 2rem;
`;

export const Meta = styled.p`
  color: ${(props) => props.theme.colors.darkGrey};
  order: 2;
  margin-block: 0.625rem;

  > span {
    font-size: 1.875rem;
    line-height: 0;
    vertical-align: middle;
    display: inline-block;
    margin-inline: 0.3125rem;
  }

  @media (max-width: 37.5rem) {
    margin-bottom: 0.3125rem;
  }
`;

export const TitleLink = styled(Link)`
  border-radius: 0.125rem;

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.violet};
    outline-offset: 2px;
  }
`;

export const Title = styled(Heading)`
  order: 3;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.headings.text};

    &:hover {
      color: ${(props) => props.theme.colors.headings.hover.text};
    }
  }
`;

export const Company = styled.p`
  color: ${(props) => props.theme.colors.darkGrey};
  order: 4;
  margin-block: 0.625rem;
  flex: 1;

  @media (max-width: 37.5rem) {
    margin-top: 0.3125rem;
  }
`;

export const Location = styled.p`
  background-color: transparent;
  border: unset;
  order: 5;
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.violet};
  margin-block: 1.875rem 0;
`;
