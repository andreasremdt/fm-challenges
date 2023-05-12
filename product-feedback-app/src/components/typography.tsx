import { ComponentPropsWithoutRef, ElementType } from "react";
import cx from "classnames";

type Props<T extends ElementType> = {
  /**
   * An HTML tag name if you want to override the default `p`.
   */
  as?: T;
  /**
   * Determines the style of the element.
   */
  variant?: "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "body3";
} & ComponentPropsWithoutRef<T>;

const styles = {
  h1: "text-h1 font-bold",
  h2: "text-h2 font-bold",
  h3: "text-h3 font-bold",
  h4: "text-h4 font-bold",
  body1: "text-body1",
  body2: "text-body2",
  body3: "text-body3 font-semibold",
};

export default function Typography<T extends ElementType = "p">({
  as,
  variant = "body1",
  className,
  ...props
}: Props<T>) {
  const Component = as || "p";

  return <Component {...props} className={cx(styles[variant], className)} />;
}
