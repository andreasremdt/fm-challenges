import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cx } from "@/lib/helpers";

import styles from "./container.module.css";

type Props<T extends ElementType> = {
  variant?: "normal" | "small";
  as?: T;
};

export default function Container<T extends ElementType = "div">({
  as,
  variant = "normal",
  className,
  ...props
}: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Tag = as || "div";

  return <Tag className={cx(styles.container, styles[variant], className)} {...props} />;
}
