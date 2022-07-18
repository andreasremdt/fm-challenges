import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { KeyboardEvent, MouseEvent, useState } from "react";

type Props = {
  editable?: boolean;
  onClick?: () => void;
  meta: string;
  name: string;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  min-width: 30rem;
`;

const Meta = styled.span`
  color: ${(props) => props.theme.colors.gray400};
  font: 300 13px/1.3 ${(props) => props.theme.fonts.sans};
`;

const Name = styled.button`
  color: ${(props) => props.theme.colors.white};
  font: 400 15px/1.3 ${(props) => props.theme.fonts.sans};
  display: block;
  background-color: transparent;
  border: unset;
  border-bottom: 1px solid transparent;
  padding: unset;
  cursor: pointer;
  transition: color 0.05s linear;

  &:where(:hover, :focus-visible) {
    color: ${(props) => props.theme.colors.orange400};
    outline: none;
  }
`;

const Input = styled.input`
  color: ${(props) => props.theme.colors.white};
  font: 400 15px/1.3 ${(props) => props.theme.fonts.sans};
  display: block;
  background-color: transparent;
  border: unset;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  width: 100%;
  padding: unset;
  caret-color: ${(props) => props.theme.colors.orange400};

  &:where(:hover, :focus-visible) {
    outline: none;
  }
`;

function File({ editable = false, meta, name, onClick }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(name);

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape" || event.key === "Enter") {
      setIsEditing(false);
    }
  }

  function handleBlur() {
    setIsEditing(false);
  }

  function handleFocus() {
    console.log("focuzs");
  }

  function handleClick(event: MouseEvent) {
    if (editable) {
      setIsEditing(true);
    } else {
      onClick?.();
    }
  }

  return (
    <Wrapper>
      <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z"
          fill="#FFF"
        />
      </svg>
      <div
        css={css`
          width: 100%;
        `}
      >
        <Meta>{meta}</Meta>
        {isEditing ? (
          <Input
            type="text"
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onFocus={handleFocus}
            autoFocus
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        ) : (
          <Name onClick={handleClick}>{name}</Name>
        )}
      </div>
    </Wrapper>
  );
}

export default File;
