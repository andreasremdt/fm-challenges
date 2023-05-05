import type { ComponentPropsWithoutRef } from "react";

import { cx } from "@/lib/helpers";

import styles from "./badge.module.css";

type Props = {
  variant?: "normal" | "small";
} & ComponentPropsWithoutRef<"span">;

export default function Badge({ variant = "normal", className, ...props }: Props) {
  return <span className={cx(styles.badge, styles[variant], className)} {...props} />;
}
