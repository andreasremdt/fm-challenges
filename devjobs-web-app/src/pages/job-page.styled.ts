import styled from "styled-components";

import Logo from "../components/logo";
import Heading from "../components/heading";

export const TopHeader = styled.header`
  background-color: ${(props) => props.theme.colors.element};
  width: clamp(16rem, 98vw, 730px);
  margin-inline: auto;
  display: flex;
  height: 140px;
  border-radius: 6px;
  overflow: hidden;
  transform: translateY(-40px);
  gap: 0 40px;
  align-items: center;
  padding-right: 40px;
`;

export const CompanyLogo = styled(Logo)`
  order: -1;
`;

export const Column = styled.div`
  margin-right: auto;
`;

export const CompanyTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.h2};
  line-height: ${(props) => props.theme.lineHeights.h2};
  margin-block: 0 10px;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.darkGrey};
  text-decoration: none;
  margin-top: 10px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.main`
  width: clamp(16rem, 98vw, 730px);
  margin-inline: auto;
  background-color: ${(props) => props.theme.colors.element};
  padding: 40px;
  border-radius: 6px;
`;

export const SubHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Meta = styled.p`
  margin-block: 0 8px;
`;

export const Title = styled(Heading)`
  margin-block: 35px 20px;
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: unset;
  margin: unset;

  li {
    padding-left: 2rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 4px;
      aspect-ratio: 1;
      border-radius: 100%;
      left: 0;
      top: 11px;
      background-color: ${(props) => props.theme.colors.violet};
    }
  }
`;

export const NumberList = styled.ol`
  list-style: none;
  padding: unset;
  margin: unset;
  counter-reset: custom-counter;

  li {
    counter-increment: custom-counter;
    padding-left: 2rem;
    position: relative;

    &::before {
      content: counter(custom-counter);
      position: absolute;
      left: 0;
      color: ${(props) => props.theme.colors.violet};
      font-weight: bold;
      margin-right: 2rem;
    }
  }
`;

export const Location = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.violet};
  margin-block: 8px 0;
`;

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.element};
  margin-top: 80px;
  position: sticky;
  top: 100vh;
`;

export const FooterContainer = styled.div`
  max-width: 730px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  height: 96px;
`;

export const FooterTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.h3};
  margin: unset;
`;

export const FooterCompany = styled.p`
  margin: 5px 0 0;
`;
