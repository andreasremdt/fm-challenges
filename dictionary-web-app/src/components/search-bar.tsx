import type { Accessor, Component } from "solid-js";
import { createSignal } from "solid-js";

import Input from "./input";
import styles from "./search-bar.module.css";

type SearchBarProps = {
  word: Accessor<string>;
  onSubmit?: (word: string) => void;
};

const SearchBar: Component<SearchBarProps> = (props) => {
  const [invalid, setInvalid] = createSignal(false);

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    const word = new FormData(event.target as HTMLFormElement).get("word") as string;

    setInvalid(word.length === 0);

    props.onSubmit?.(word);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" />

      <Input
        placeholder="Search for any word..."
        error={invalid()}
        helperText="Whoops, can't be empty..."
        value={props.word()}
        name="word"
        adornment={
          <Input.Adornment>
            <button type="submit" aria-label="Submit" class={styles.button}>
              <svg width="20" height="20" viewBox="0 0 18 18">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
                />
              </svg>
            </button>
          </Input.Adornment>
        }
      />
    </form>
  );
};

export default SearchBar;
