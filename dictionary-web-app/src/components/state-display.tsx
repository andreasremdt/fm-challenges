import { Component } from "solid-js";

import { Show } from "solid-js";

import styles from "./state-display.module.css";

type StateDisplayProps = {
  emoji?: string;
  title: string;
  message?: string;
};

const StateDisplay: Component<StateDisplayProps> = (props) => {
  return (
    <div class={styles.container}>
      <Show when={props.emoji}>
        <span aria-hidden="true" class={styles.icon}>
          {props.emoji}
        </span>
      </Show>
      <h1 class={styles.title}>{props.title}</h1>
      <Show when={props.message}>
        <p class={styles.text}>{props.message}</p>
      </Show>
    </div>
  );
};

export default StateDisplay;
