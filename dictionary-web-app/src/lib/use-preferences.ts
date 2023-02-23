import { createSignal, onCleanup } from "solid-js";

export const fontMap = {
  sans: "Sans Serif",
  serif: "Serif",
  mono: "Mono",
};

const FONT_FAMILY_KEY = "font-family-preference";
const DARK_MODE_KEY = "dark-mode-preference";

const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

export type FontKey = keyof typeof fontMap;

const isDarkModePreferredByDefault = () => {
  const key = localStorage.getItem(DARK_MODE_KEY);

  if (!key) {
    return colorScheme.matches;
  }

  return key === "false" ? false : true;
};

const setPreferencesInHTML = ({ darkModeEnabled, fontFamily }: { darkModeEnabled?: boolean; fontFamily?: FontKey }) => {
  if (darkModeEnabled !== undefined) {
    document.documentElement.dataset.theme = darkModeEnabled ? "dark" : "light";
  }

  if (fontFamily !== undefined) {
    document.documentElement.dataset.font = fontFamily;
  }
};

const usePreferences = () => {
  const defaultFontFamily = (localStorage.getItem(FONT_FAMILY_KEY) as FontKey) || "serif";
  const defaultDarkMode = isDarkModePreferredByDefault();

  const [fontFamily, setFontFamily] = createSignal<FontKey>(defaultFontFamily);
  const [darkMode, setDarkMode] = createSignal(defaultDarkMode);

  setPreferencesInHTML({ darkModeEnabled: defaultDarkMode, fontFamily: defaultFontFamily });

  const handleFontFamilyUpdate = (fontFamily: FontKey) => {
    setPreferencesInHTML({ fontFamily });
    setFontFamily(fontFamily);

    localStorage.setItem(FONT_FAMILY_KEY, fontFamily);
  };

  const handleDarkModeUpdate = (enabled: boolean) => {
    setPreferencesInHTML({ darkModeEnabled: enabled });
    setDarkMode(enabled);
    localStorage.setItem(DARK_MODE_KEY, String(enabled));
  };

  const handleColorSchemeChange = (event: MediaQueryListEvent) => {
    if (!localStorage.getItem(DARK_MODE_KEY)) {
      setPreferencesInHTML({ darkModeEnabled: event.matches });
      setDarkMode(event.matches);
    }
  };

  colorScheme.addEventListener("change", handleColorSchemeChange);

  onCleanup(() => {
    colorScheme.removeEventListener("change", handleColorSchemeChange);
  });

  const update = {
    darkMode: handleDarkModeUpdate,
    fontFamily: handleFontFamilyUpdate,
  };

  return { fontFamily, darkMode, update };
};

export default usePreferences;
