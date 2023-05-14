import { ComponentPropsWithoutRef, ElementType } from "react";

type Props<T extends ElementType> = {
  /**
   * An HTML tag for the label component. By default, a `label` is rendered.
   */
  as?: T;
  /**
   * An optional description of the label.
   */
  description?: string;
} & ComponentPropsWithoutRef<T>;

export default function Label<T extends ElementType = "label">({
  as,
  children,
  description,
  className,
  ...props
}: Props<T>) {
  const Component = as || "label";

  return (
    <Component className={className} {...props}>
      <span className="text-h4 font-bold block">{children}</span>
      {description && <span className="text-h4 text-gray">{description}</span>}
    </Component>
  );
}
