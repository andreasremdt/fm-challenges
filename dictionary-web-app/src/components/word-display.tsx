import type { Component } from "solid-js";
import { For } from "solid-js";

import PlayAudio from "./play-audio";
import MeaningDisplay from "./meaning-display";
import Footer from "./footer";
import styles from "./word-display.module.css";

import type { Word } from "../types";

type WordDisplayProps = {
  definition: Word[];
  onSelectWord: (word: string) => void;
};

const WordDisplay: Component<WordDisplayProps> = (props) => (
  <main>
    <For each={props.definition}>
      {(definition) => (
        <section>
          <header class={styles.header}>
            <div>
              <h1 class={styles.title}>{definition.word}</h1>
              <p class={styles.phonetics}>{definition.phonetic}</p>
            </div>

            <PlayAudio definition={definition} />
          </header>

          <For each={definition.meanings}>
            {(meaning) => <MeaningDisplay meaning={meaning} onSelectWord={props.onSelectWord} />}
          </For>

          <Footer urls={definition.sourceUrls} />
        </section>
      )}
    </For>
  </main>
);

export default WordDisplay;
