import styled from "styled-components";

import Logo from "../components/logo";
import Heading from "../components/heading";
import Button from "../components/button";

export const EmptyState = styled.p`
  text-align: center;
  margin-top: 40px;
`;

export const ErrorState = styled.p`
  background-color: ${(props) => props.theme.colors.violet};
  color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  width: clamp(16rem, calc(100% - 80px), 730px);
  margin-inline: auto;
`;

export const TopHeader = styled.header`
  background-color: ${(props) => props.theme.colors.element};
  width: clamp(16rem, calc(100% - 80px), 730px);
  margin-inline: auto;
  display: flex;
  height: 140px;
  border-radius: 6px;
  transform: translateY(-40px);
  gap: 0 40px;
  align-items: center;
  padding-right: 40px;

  @media (min-width: 768px) {
    overflow: hidden;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    text-align: center;
    padding: 0 32px 32px;
  }

  @media (max-width: 600px) {
    padding: 0 20px 20px;
    transform: translateY(-20px);
    width: clamp(16rem, calc(100% - 40px), 730px);
  }
`;

export const CompanyLogo = styled(Logo)`
  order: -1;

  @media (max-width: 768px) {
    transform: translateY(-50%);
    border-radius: 15px;
    width: 50px;
  }
`;

export const Column = styled.div`
  margin-right: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 32px;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: ${(props) => props.theme.fontSizes.h3};
    }
  }
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.darkGrey};
  text-decoration: none;
  margin-top: 10px;
  display: block;
  border-radius: 2px;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.violet};
    outline-offset: 2px;
  }
`;

export const Container = styled.main`
  width: clamp(16rem, calc(100% - 80px), 730px);
  margin-inline: auto;
  background-color: ${(props) => props.theme.colors.element};
  padding: 40px;
  border-radius: 6px;

  @media (max-width: 600px) {
    width: clamp(16rem, calc(100% - 40px), 730px);
    padding-inline: 24px;
  }
`;

export const ApplyButton = styled(Button)`
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const SubHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Meta = styled.p`
  margin-block: 0 8px;

  @media (max-width: 600px) {
    margin-bottom: 3px;
  }
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

  @media (max-width: 600px) {
    margin-block: 3px 30px;
  }
`;

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.element};
  margin-top: 80px;
  position: sticky;
  top: 100vh;
`;

export const FooterContainer = styled.div`
  width: clamp(16rem, calc(100% - 80px), 730px);
  margin-inline: auto;
  display: flex;
  align-items: center;
  height: 96px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    ${Column} {
      display: none;
    }
  }

  @media (max-width: 600px) {
    width: clamp(16rem, calc(100% - 40px), 730px);
  }
`;

export const FooterCompany = styled.p`
  margin: 5px 0 0;
`;
