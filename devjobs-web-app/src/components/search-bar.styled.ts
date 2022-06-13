import styled, { css } from "styled-components";
import Button from "./button";

const CommonInputStyles = css`
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center left;
  color: ${(props) => props.theme.colors.inputs.text};
  border-right: 1px solid ${(props) => props.theme.colors.inputs.border};
  outline: none;
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme.colors.element};
  margin-inline: 165px;
  border-radius: 6px;
  transform: translateY(-50%);
  display: flex;
  height: 80px;
  padding-inline: 32px 16px;
  outline: none;
  gap: 32px;
`;

export const SearchInput = styled.input`
  ${CommonInputStyles}

  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z' fill='%235964E0' fill-rule='nonzero' /%3E%3C/svg%3E");
  padding-inline: 40px 32px;
  flex: 2;

  &::placeholder {
    color: ${(props) => props.theme.colors.inputs.placeholder};
    opacity: 1;
  }
`;

export const Select = styled.select`
  ${CommonInputStyles}

  background-image: url("data:image/svg+xml,%3Csvg width='17' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z' fill='%235964E0' fill-rule='nonzero' /%3E%3C/svg%3E");
  padding-inline: 32px;
  flex: 1;

  &:invalid {
    color: ${(props) => props.theme.colors.inputs.placeholder};
  }
`;

export const SubmitButton = styled(Button)`
  align-self: center;
`;
