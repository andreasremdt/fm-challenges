import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cx } from "@/lib/helpers";

import styles from "./typography.module.css";

type Props<T extends ElementType> = {
  as?: T;
  variant?: "h1" | "h2" | "h3" | "h4" | "p";
} & ComponentPropsWithoutRef<T>;

export default function Typography<T extends ElementType = "p">({ as, className, variant = "p", ...props }: Props<T>) {
  const Component = as || "p";

  return <Component {...props} className={cx(styles[variant], className)} />;
}
