import type { Component } from "solid-js";
import { For } from "solid-js";

import styles from "./footer.module.css";

type FooterProps = {
  urls: string[];
};

const Footer: Component<FooterProps> = (props) => {
  return (
    <footer class={styles.footer}>
      <p class={styles.paragraph}>
        Source
        <For each={props.urls}>
          {(url) => (
            <a href={url} target="_blank" rel="noopener nofollow noreferrer" class={styles.link}>
              {url}
            </a>
          )}
        </For>
      </p>
    </footer>
  );
};

export default Footer;
