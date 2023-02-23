import type { Component, JSX, ParentComponent } from "solid-js";
import { splitProps, Show, children } from "solid-js";

import { createId } from "../lib/utils";
import styles from "./input.module.css";

type InputProps = JSX.IntrinsicElements["input"] & {
  error?: boolean;
  helperText?: string;
  adornment?: JSX.Element;
};

type InputComponent = {
  Adornment: ParentComponent;
} & Component<InputProps>;

const Input: InputComponent = (props) => {
  const [local, rest] = splitProps(props, ["error", "helperText", "adornment", "class"]);
  const adornment = children(() => local.adornment);
  const errorId = createId("error");

  return (
    <div class={styles.container}>
      <input
        type="search"
        aria-invalid={local.error}
        aria-describedby={local.error ? errorId : undefined}
        classList={{ [local.class as string]: Boolean(local.class), [styles.input]: true, [styles.error]: local.error }}
        {...rest}
      />
      <Show when={local.adornment}>{adornment()}</Show>

      <Show when={local.error}>
        <p class={styles["helper-text"]} aria-live="polite" id={errorId}>
          {local.helperText}
        </p>
      </Show>
    </div>
  );
};

const Adornment: ParentComponent = (props) => (
  <span aria-hidden="true" class={styles.adornment}>
    {props.children}
  </span>
);

Input.Adornment = Adornment;

export default Input;
