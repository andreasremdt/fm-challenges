import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "@/pages/home";
import JobPage from "@/pages/job-page";
import NotFound from "@/pages/not-found";
import Header from "@/components/header";
import LightSwitch from "@/components/light-switch";
import useColorSwitch from "@/hooks/use-color-switch";
import GlobalStyles from "@/global.css";
import getTheme from "@/theme";

function App() {
  const [isDark, setIsDark] = useColorSwitch();

  return (
    <StrictMode>
      <ThemeProvider theme={getTheme(isDark)}>
        <GlobalStyles />

        <BrowserRouter>
          <Header>
            <LightSwitch isDark={isDark} onDarkToggle={setIsDark} />
          </Header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs/:jobId" element={<JobPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
