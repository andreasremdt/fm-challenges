import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

import { cx } from "@/lib/helpers";

import styles from "./button.module.css";

type Props = {
  variant?: "transparent" | "primary" | "secondary";
} & ComponentPropsWithoutRef<"button">;

export default forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = "primary", className, type = "button", ...props }: Props,
  ref
) {
  return <button type={type} className={cx(styles.button, styles[variant], className)} {...props} ref={ref} />;
});
