import { StrictMode, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "@/components/header";
import LightSwitch from "@/components/light-switch";
import useColorSwitch from "@/hooks/use-color-switch";
import GlobalStyles from "@/global.css";
import getTheme from "@/theme";

const HomePage = lazy(() => import("@/pages/home"));
const JobPage = lazy(() => import("@/pages/job-page"));
const NotFoundPage = lazy(() => import("@/pages/not-found"));

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
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/jobs/:jobId" element={<JobPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
