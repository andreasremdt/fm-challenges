import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 15px;
`;

export const Knob = styled.span`
  display: block;
  width: 14px;
  aspect-ratio: 1;
  border-radius: 14px;
  background-color: ${(props) => props.theme.colors.violet};
  transition: background-color 0.05s linear, left 0.1s ease-out;
  position: absolute;
  top: 5px;
  left: 5px;
`;

export const Label = styled.label`
  cursor: pointer;
  position: relative;
  width: 48px;
  height: 24px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 24px;

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
    left: 28px;
  }

  &:focus-visible + ${Knob} {
    outline: 2px solid ${(props) => props.theme.colors.violet};
    outline-offset: 2px;
  }
`;
