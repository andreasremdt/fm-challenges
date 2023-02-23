import type { ParentComponent } from "solid-js";
import { Show } from "solid-js";

import styles from "./switch.module.css";

type SwitchProps = {
  checked: boolean;
  title?: string;
  onCheckedChange: (value: boolean) => void;
};

const Switch: ParentComponent<SwitchProps> = (props) => {
  return (
    <div class={styles.container}>
      <button
        aria-live="polite"
        type="button"
        role="switch"
        class={styles.switch}
        classList={{ [styles.active]: props.checked }}
        tabIndex={0}
        aria-checked={props.checked}
        onClick={() => props.onCheckedChange(!props.checked)}
      >
        <Show when={props.title}>
          <span class="sr-only">{props.title}</span>
        </Show>
        <span class={styles.knob} aria-hidden="true" classList={{ [styles.active]: props.checked }} />
      </button>

      {props.children}
    </div>
  );
};

export default Switch;
