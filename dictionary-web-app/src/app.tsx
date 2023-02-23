import type { Component } from "solid-js";
import { createSignal, createResource, Match, Switch, lazy } from "solid-js";

import Header from "./components/header";
import SearchBar from "./components/search-bar";
import StateDisplay from "./components/state-display";
import { fetchDefinition } from "./lib/utils";
import styles from "./app.module.css";

const WordDisplay = lazy(() => import("./components/word-display"));

const App: Component = () => {
  const [word, setWord] = createSignal<string>("");
  const [definition] = createResource(word, fetchDefinition);

  return (
    <main class={styles.container}>
      <Header />
      <SearchBar word={word} onSubmit={setWord} />

      <Switch>
        <Match when={!definition.loading && !definition()}>
          <StateDisplay
            title="Nothing here, yet"
            emoji="🤷‍♂️"
            message="Start by typing the word you are looking for in the above input and press Enter."
          />
        </Match>
        <Match when={definition.loading}>
          <StateDisplay title="Loading..." emoji="🐌" />
        </Match>
        <Match when={definition.error}>
          <StateDisplay
            title="Yikes, that's an error"
            emoji="😵"
            message="Something went wrong while we tried to fetch your definition. Please try again later."
          />
        </Match>
        <Match when={!definition()?.success}>
          <StateDisplay
            title={definition()!.error!.title}
            emoji="😕"
            message={`${definition()!.error!.message} ${definition()!.error!.resolution}`}
          />
        </Match>
        <Match when={definition()?.success}>
          <WordDisplay definition={definition()!.data!} onSelectWord={setWord} />
        </Match>
      </Switch>
    </main>
  );
};

export default App;
