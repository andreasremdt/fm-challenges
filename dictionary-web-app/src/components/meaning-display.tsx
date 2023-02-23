import type { Component } from "solid-js";
import { Show, For } from "solid-js";

import styles from "./meaning-display.module.css";

import type { Meaning } from "../types";

type MeaningProps = {
  meaning: Meaning;
  onSelectWord: (word: string) => void;
};

const MeaningDisplay: Component<MeaningProps> = (props) => (
  <article>
    <h2 class={styles.h2}>{props.meaning.partOfSpeech}</h2>

    <Show when={props.meaning.definitions.length}>
      <h3 class={styles.h3}>Meaning</h3>

      <ul class={styles.list}>
        <For each={props.meaning.definitions}>
          {(definition) => (
            <li class={styles.item}>
              {definition.definition}
              <Show when={definition.example}>
                <span class={styles.example}>{definition.example}</span>
              </Show>
            </li>
          )}
        </For>
      </ul>
    </Show>

    <Show when={props.meaning.synonyms.length}>
      <div class={styles.section}>
        <h3 class={styles.h3}>Synonyms</h3>

        <ul class={styles["keyword-list"]}>
          <For each={props.meaning.synonyms}>
            {(synonym) => (
              <li>
                <button type="button" class={styles["word-button"]} onClick={() => props.onSelectWord(synonym)}>
                  {synonym}
                </button>
              </li>
            )}
          </For>
        </ul>
      </div>
    </Show>

    <Show when={props.meaning.antonyms.length}>
      <div class={styles.section}>
        <h3 class={styles.h3}>Antonyms</h3>

        <ul class={styles["keyword-list"]}>
          <For each={props.meaning.antonyms}>
            {(antonym) => (
              <li>
                <button type="button" class={styles["word-button"]} onClick={() => props.onSelectWord(antonym)}>
                  {antonym}
                </button>
              </li>
            )}
          </For>
        </ul>
      </div>
    </Show>
  </article>
);

export default MeaningDisplay;
