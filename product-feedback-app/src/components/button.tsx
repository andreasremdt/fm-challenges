import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import Link from "next/link";
import cx from "classnames";

type OwnProps<T extends ElementType = ElementType> = {
  /**
   * An HTML tag for the button component. You can either render a button or link.
   */
  as?: T;
  /**
   * Determines the style of the element.
   */
  variant?: "primary" | "secondary" | "neutral" | "danger" | "text";
  /**
   * An icon to be displayed on left side.
   */
  icon?: ReactNode;
};

type Props<T extends ElementType> = OwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof OwnProps> & {
    /**
     * The `href` is only required if this button is rendered as a link.
     */
    href?: string;
  };

const styles = {
  primary: "bg-primary text-white hover:bg-primary/75 focus-visible:bg-primary/75 focus-visible:ring-primary/75",
  secondary: "bg-blue text-white hover:bg-blue/75 focus-visible:bg-blue/75 focus-visible:ring-blue/75",
  neutral: "bg-gray-500 text-white hover:bg-gray-500/75 focus-visible:bg-gray-500/75 focus-visible:ring-gray-500/75",
  danger: "bg-danger text-white hover:bg-danger/75 focus-visible:bg-danger/75 focus-visible:ring-danger/75",
  text: "bg-transparent text-gray hover:underline focus-visible:underline focus-visible:ring-gray",
};

export default function Button<T extends ElementType = "button" | "a">({
  as,
  variant = "primary",
  className,
  icon,
  children,
  href,
  ...props
}: Props<T>) {
  const Component: ElementType = as === "a" && href ? Link : "button";

  return (
    <Component
      {...props}
      className={cx(
        "h-11 font-bold rounded-lg px-10 inline-flex items-center justify-center gap-x-2 text-h4 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors",
        styles[variant],
        className
      )}
    >
      {icon}
      {children}
    </Component>
  );
}
