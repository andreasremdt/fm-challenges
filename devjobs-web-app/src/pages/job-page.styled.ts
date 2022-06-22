import styled from "styled-components";

import Logo from "../components/logo";
import Heading from "../components/heading";
import Button from "../components/button";

export const EmptyState = styled.p`
  text-align: center;
  margin-top: 2.5rem;
`;

export const ErrorState = styled.p`
  background-color: ${(props) => props.theme.colors.violet};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.375rem;
  padding: 1.25rem;
  text-align: center;
  width: clamp(16rem, calc(100% - 5rem), 45.625rem);
  margin-inline: auto;
`;

export const TopHeader = styled.header`
  background-color: ${(props) => props.theme.colors.element};
  width: clamp(16rem, calc(100% - 5rem), 45.625rem);
  margin-inline: auto;
  display: flex;
  height: 8.75rem;
  border-radius: 0.375rem;
  transform: translateY(-2.5rem);
  gap: 0 2.5rem;
  align-items: center;
  padding-right: 2.5rem;

  @media (min-width: 48rem) {
    overflow: hidden;
  }

  @media (max-width: 48rem) {
    flex-direction: column;
    height: auto;
    text-align: center;
    padding: 0 2rem 2rem;
  }

  @media (max-width: 37.5rem) {
    padding: 0 1.25rem 1.25rem;
    transform: translateY(-1.25rem);
    width: clamp(16rem, calc(100% - 2.5rem), 45.625rem);
  }
`;

export const CompanyLogo = styled(Logo)`
  order: -1;

  @media (max-width: 48rem) {
    transform: translateY(-50%);
    border-radius: 0.9375rem;
    width: 50px;
  }
`;

export const Column = styled.div`
  margin-right: auto;

  @media (max-width: 48rem) {
    width: 100%;
    margin-bottom: 2rem;
  }

  @media (max-width: 37.5rem) {
    h2 {
      font-size: ${(props) => props.theme.fontSizes.h3};
    }
  }
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.darkGrey};
  text-decoration: none;
  margin-top: 0.625rem;
  display: block;
  border-radius: 0.125rem;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.violet};
    outline-offset: 2px;
  }
`;

export const Container = styled.main`
  width: clamp(16rem, calc(100% - 5rem), 45.625rem);
  margin-inline: auto;
  background-color: ${(props) => props.theme.colors.element};
  padding: 2.5rem;
  border-radius: 0.375rem;

  @media (max-width: 37.5rem) {
    width: clamp(16rem, calc(100% - 2.5rem), 45.625rem);
    padding-inline: 1.5rem;
  }
`;

export const ApplyButton = styled(Button)`
  @media (max-width: 48rem) {
    width: 100%;
    justify-content: center;
  }
`;

export const SubHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;

  @media (max-width: 48rem) {
    flex-direction: column;
    margin-bottom: 1.25rem;
  }
`;

export const Meta = styled.p`
  margin-block: 0 0.5rem;

  @media (max-width: 37.5rem) {
    margin-bottom: 0.1875rem;
  }
`;

export const Title = styled(Heading)`
  margin-block: 2.1875rem 1.25rem;
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
      top: 0.6875rem;
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
  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.violet};
  margin-block: 0.5rem 0;

  @media (max-width: 37.5rem) {
    margin-block: 0.1875rem 1.875rem;
  }
`;

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.element};
  margin-top: 5rem;
  position: sticky;
  top: 100vh;
`;

export const FooterContainer = styled.div`
  width: clamp(16rem, calc(100% - 5rem), 45.625rem);
  margin-inline: auto;
  display: flex;
  align-items: center;
  height: 6rem;

  @media (max-width: 48rem) {
    flex-direction: column;
    justify-content: center;

    ${Column} {
      display: none;
    }
  }

  @media (max-width: 37.5rem) {
    width: clamp(16rem, calc(100% - 2.5rem), 45.625rem);
  }
`;

export const FooterCompany = styled.p`
  margin: 0.3125rem 0 0;
`;
