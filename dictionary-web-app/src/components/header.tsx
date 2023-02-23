import type { Component } from "solid-js";
import { For } from "solid-js";

import Switch from "./switch";
import Dropdown from "./dropdown";
import usePreferences, { fontMap } from "../lib/use-preferences";

import styles from "./header.module.css";

const Header: Component = () => {
  const { update, darkMode, fontFamily } = usePreferences();

  return (
    <header class={styles.header}>
      <svg width="34" height="38" viewBox="0 0 34 38" aria-hidden="true" class={styles.logo}>
        <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
          <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
          <path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8" />
          <path d="M11 9h12" />
        </g>
      </svg>

      <Dropdown class={styles.dropdown} onChange={update.fontFamily}>
        <Dropdown.Trigger class={`ff-${fontFamily()}`}>{fontMap[fontFamily()]}</Dropdown.Trigger>

        <Dropdown.Menu>
          <For each={Object.entries(fontMap)}>
            {([key, value]) => (
              <Dropdown.Option value={key} class={`ff-${key}`}>
                {value}
              </Dropdown.Option>
            )}
          </For>
        </Dropdown.Menu>
      </Dropdown>

      <Switch
        checked={darkMode()}
        onCheckedChange={update.darkMode}
        title={`${darkMode() ? "Disable" : "Enable"} dark mode`}
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 22 22"
          class={styles["switch-icon"]}
          classList={{ [styles.active]: darkMode() }}
        >
          <path
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </Switch>
    </header>
  );
};

export default Header;
