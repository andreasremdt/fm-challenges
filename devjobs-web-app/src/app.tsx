import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/home";
import JobPage from "./pages/job-page";
import StyleGuide from "./pages/style-guide";

import Header from "./components/header";
import LightSwitch from "./components/light-switch";
import GlobalStyles from "./global.css";
import getTheme from "./theme";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const key = localStorage.getItem("dark_mode_enabled");

    if (!key || key === "false") {
      return false;
    }

    return true;
  });

  useEffect(() => {
    localStorage.setItem("dark_mode_enabled", String(isDark));
  }, [isDark]);

  return (
    <React.StrictMode>
      <ThemeProvider theme={getTheme(isDark)}>
        <GlobalStyles />

        <BrowserRouter>
          <Header>
            <LightSwitch isDark={isDark} onDarkToggle={setIsDark} />
          </Header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs/:jobId" element={<JobPage />} />
            <Route path="/style-guide" element={<StyleGuide />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
