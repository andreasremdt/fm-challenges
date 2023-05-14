import { ComponentPropsWithoutRef, ElementType } from "react";
import cx from "classnames";

type Props<T extends ElementType> = {
  /**
   * An HTML tag for the card component. By default, a `div` is rendered.
   */
  as?: T;
  /**
   * The color of the top border. If `undefined`, no border is rendered.
   */
  color?: "primary" | "secondary" | "tertiary";
} & ComponentPropsWithoutRef<T>;

export default function Card<T extends ElementType = "div">({ as, color, className, ...props }: Props<T>) {
  const Component = as || "div";

  return (
    <Component
      className={cx(
        "bg-white p-6 rounded-lg",
        {
          "border-t-[6px]": Boolean(color),
          "border-primary": color === "primary",
          "border-secondary": color === "secondary",
          "border-tertiary": color === "tertiary",
        },
        className
      )}
      {...props}
    />
  );
}
