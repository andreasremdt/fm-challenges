import styled, { css, keyframes } from "styled-components";

import Button from "@/components/button";

const CommonInputStyles = css`
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center left;
  color: ${(props) => props.theme.colors.inputs.text};
  border-right: 1px solid ${(props) => props.theme.colors.inputs.border};
  outline: none;

  @media (max-width: 37.5rem) {
    border-right: unset;
  }
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme.colors.element};
  margin-inline: auto;
  width: clamp(12rem, calc(100% - 5rem), 69.375rem);
  border-radius: 0.375rem;
  margin-top: -2.5rem;
  display: flex;
  height: 5rem;
  padding-inline: 2rem 1rem;
  outline: none;
  gap: 2rem;

  @media (max-width: 53.125rem) {
    gap: 1.25rem;
  }

  @media (max-width: 37.5rem) {
    gap: 0.625rem;
    width: clamp(12rem, calc(100% - 2.5rem), 69.375rem);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Overlay = styled.div<{ open: boolean }>`
  display: contents;

  @media (max-width: 37.5rem) {
    z-index: 1;
    display: ${(props) => (props.open ? "grid" : "none")};
    place-items: center;
    position: fixed;
    inset: 0;
    background-color: hsla(0, 0%, 0%, 0.5);
    animation: ${fadeIn} 0.2s ease-out forwards;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(1.25rem);
  }

  to {
    transform: translateY(0);
  }
`;

export const InnerOverlay = styled.div`
  display: contents;

  @media (max-width: 37.5rem) {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    width: calc(100% - 2.5rem);
    border-radius: 0.375rem;
    padding: 1.5rem;
    background-color: ${(props) => props.theme.colors.element};
    animation: ${slideIn} 0.3s ease-out forwards;
  }
`;

export const SearchInput = styled.input`
  ${CommonInputStyles}

  padding-inline: 2.5rem 2rem;
  flex: 3;
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.colors.inputs.placeholder};
    opacity: 1;
  }

  @media (max-width: 53.125rem) {
    flex: 1;
    padding-inline: 2rem 1.25rem;
  }

  @media (min-width: 37.5rem) {
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z' fill='%235964E0' fill-rule='nonzero' /%3E%3C/svg%3E");
  }

  @media (max-width: 37.5rem) {
    padding-inline: 0;
  }
`;

export const Select = styled.select`
  ${CommonInputStyles}

  background-image: url("data:image/svg+xml,%3Csvg width='17' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z' fill='%235964E0' fill-rule='nonzero' /%3E%3C/svg%3E");
  padding-inline: 2rem;
  flex: 2;
  width: 100%;

  &:invalid {
    color: ${(props) => props.theme.colors.inputs.placeholder};
  }

  @media (max-width: 53.125rem) {
    flex: 1;
    padding-inline: 1.25rem;
  }

  @media (max-width: 37.5rem) {
    margin-inline: -1.5rem;
    padding-bottom: 1.5rem;
    width: calc(100% + 3rem);
    padding-inline: 3.75rem 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.inputs.border};
    background-position: 1.5rem 0;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.violet};
  }
`;

export const SubmitButton = styled(Button)`
  align-self: center;

  @media (max-width: 53.125rem) {
    padding-inline: 1rem;
  }

  @media (max-width: 37.5rem) {
    width: 100%;
    justify-content: center;
  }
`;

export const MobileButton = styled(Button)`
  padding: unset;
  width: 3rem;
  display: inline-flex;
  justify-content: center;
  align-self: center;

  @media (min-width: 37.5rem) {
    display: none;
  }
`;
