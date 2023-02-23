import type { Component } from "solid-js";

import styles from "./loading-state.module.css";

const LoadingState: Component = () => {
  return (
    <div class={styles.container}>
      <span aria-hidden="true" class={styles.icon}>
        🐌
      </span>
      <h2 class={styles.title}>Loading, please wait</h2>
    </div>
  );
};

export default LoadingState;
