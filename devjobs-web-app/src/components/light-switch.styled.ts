import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.9375rem;
`;

export const Knob = styled.span`
  display: block;
  width: 0.875rem;
  aspect-ratio: 1;
  border-radius: 0.875rem;
  background-color: ${(props) => props.theme.colors.violet};
  transition: background-color 0.05s linear, left 0.1s ease-out;
  position: absolute;
  top: 0.3125rem;
  left: 0.3125rem;
`;

export const Label = styled.label`
  cursor: pointer;
  position: relative;
  width: 3rem;
  height: 1.5rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 1.5rem;

  &:hover ${Knob} {
    background-color: ${(props) => props.theme.colors.lightViolet};
  }
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

  &:checked + ${Knob} {
    left: 1.75rem;
  }

  &:focus-visible + ${Knob} {
    outline: 2px solid ${(props) => props.theme.colors.violet};
    outline-offset: 2px;
  }
`;
