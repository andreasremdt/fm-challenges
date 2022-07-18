import styled from "@emotion/styled";
import { css } from "@emotion/react";

import Button from "@/components/button";
import File from "@/components/file";
import LightSwitch from "@/components/light-switch";

type Props = {
  isDark: boolean;
  onDarkModeToggle: () => void;
};

const Wrapper = styled.nav`
  grid-area: navigation;
  background-color: ${(props) => props.theme.colors.gray700};
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.gray400};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.sans};
  letter-spacing: 2px;
  height: 72px;
  line-height: 72px;
  padding-inline: 24px;
`;

const List = styled.ul`
  list-style: none;
  padding: unset;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Navigation({ isDark, onDarkModeToggle }: Props) {
  return (
    <Wrapper>
      <Title>My documents</Title>

      <Button
        type="button"
        css={css`
          margin-inline: 24px;
          overflow: hidden;
        `}
      >
        + New Document
      </Button>

      <List>
        <li>
          <File meta="22 April 2022" name="welcome.md" />
        </li>
        <li>
          <File meta="21 April 2021" name="your-first-document.md" />
        </li>
      </List>

      <LightSwitch isDark={isDark} onDarkModeToggle={onDarkModeToggle} />
    </Wrapper>
  );
}

export default Navigation;
