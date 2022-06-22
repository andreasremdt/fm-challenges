import { useState, useEffect, Dispatch } from "react";

const STORAGE_KEY = "dark_mode_enabled";

function useColorSwitch(): [boolean, Dispatch<React.SetStateAction<boolean>>] {
  const [isDark, setIsDark] = useState(() => {
    const key = localStorage.getItem(STORAGE_KEY);

    if (!key || key === "false") {
      return false;
    }

    return true;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(isDark));
  }, [isDark]);

  return [isDark, setIsDark];
}

export default useColorSwitch;
