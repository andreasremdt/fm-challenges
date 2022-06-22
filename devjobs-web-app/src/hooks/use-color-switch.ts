import { useState, useEffect } from "react";

const STORAGE_KEY = "dark_mode_enabled";

const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

function useColorSwitch(): [boolean, (isDark: boolean) => void] {
  const [isDark, setIsDark] = useState(() => {
    const key = localStorage.getItem(STORAGE_KEY);

    if (!key) {
      return colorScheme.matches;
    }

    return key === "false" ? false : true;
  });

  useEffect(() => {
    function handleColorSchemeChange(event: MediaQueryListEvent) {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setIsDark(event.matches);
      }
    }

    colorScheme.addEventListener("change", handleColorSchemeChange);

    return () => colorScheme.removeEventListener("change", handleColorSchemeChange);
  }, []);

  function toggleDarkMode(isDark: boolean) {
    localStorage.setItem(STORAGE_KEY, String(isDark));

    setIsDark(isDark);
  }

  return [isDark, toggleDarkMode];
}

export default useColorSwitch;
