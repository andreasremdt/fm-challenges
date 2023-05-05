import type { ComponentPropsWithoutRef } from "react";

import { cx } from "@/lib/helpers";

import styles from "./avatar.module.css";

type Props = {
  width?: number;
  image: string;
  name: string;
} & ComponentPropsWithoutRef<"button">;

export default function Avatar({ width = 50, image, name, style, className, ...props }: Props) {
  return (
    <button
      type="button"
      aria-label="your profile"
      style={{ "--width": `${width}px`, ...style } as React.CSSProperties}
      className={cx(styles.avatar, className)}
      {...props}
    >
      <img src={image} width={width} height={width} alt={`avatar of ${name}`} />
    </button>
  );
}
