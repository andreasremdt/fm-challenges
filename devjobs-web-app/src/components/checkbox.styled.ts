import styled from "styled-components";

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.theme.colors.inputs.text};
`;

export const Background = styled.span`
  display: block;
  width: 1.5rem;
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.colors.checkbox.background};
  border-radius: 0.1875rem;
`;

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;

  &:focus-visible + ${Background} {
    outline: 2px solid ${(props) => props.theme.colors.violet};
    outline-offset: 2px;
  }

  &:checked + ${Background} {
    background: ${(props) => props.theme.colors.violet}
      url("data:image/svg+xml,%3Csvg width='15' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 6.57l3.572 3.572L13.714 1' stroke='%23FFF' stroke-width='2' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E")
      no-repeat center;
  }
`;
