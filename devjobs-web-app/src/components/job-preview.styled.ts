import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "@/components/logo";
import Heading from "@/components/heading";

export const Card = styled.article`
  background-color: ${(props) => props.theme.colors.element};
  border-radius: 6px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-top: 25px;
`;

export const CompanyLogo = styled(Logo)`
  order: 1;
  border-radius: 15px;
  position: absolute;
  top: -25px;
  left: 32px;
`;

export const Meta = styled.p`
  color: ${(props) => props.theme.colors.darkGrey};
  order: 2;
  margin-block: 10px;

  > span {
    font-size: 30px;
    line-height: 0;
    vertical-align: middle;
    display: inline-block;
    margin-inline: 5px;
  }

  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

export const TitleLink = styled(Link)`
  border-radius: 2px;

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
  margin-block: 10px;
  flex: 1;

  @media (max-width: 600px) {
    margin-top: 5px;
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
  margin-block: 30px 0;
`;
