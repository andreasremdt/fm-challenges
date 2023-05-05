import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

import { cx } from "@/lib/helpers";

import styles from "./input.module.css";

type Props = ComponentPropsWithoutRef<"input">;

export default forwardRef<HTMLInputElement, Props>(function Input({ className, ...props }: Props, ref) {
  return <input className={cx(styles.input, className)} {...props} ref={ref} />;
});
