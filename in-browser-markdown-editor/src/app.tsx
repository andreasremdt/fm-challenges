import { StrictMode, useState } from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";

import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Editor from "@/components/editor";
import Preview from "@/components/preview";
import Container from "@/components/container";
import GlobalStyles from "@/components/global-styles";

import getTheme from "@/theme";

const Content = styled.div`
  display: flex;
  grid-area: content;

  > * {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
  }
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPreviewExpanded, setIsPreviewExpanded] = useState(false);

  return (
    <StrictMode>
      <ThemeProvider theme={getTheme(isDark)}>
        <Container isMenuOpen={isMenuOpen}>
          <Header isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
          <Navigation isDark={isDark} onDarkModeToggle={() => setIsDark(!isDark)} />
          <GlobalStyles />

          <Content>
            <Editor isPreviewExpanded={isPreviewExpanded} />
            <Preview
              isPreviewExpanded={isPreviewExpanded}
              onTogglePreview={() => setIsPreviewExpanded(!isPreviewExpanded)}
            />
          </Content>
        </Container>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
