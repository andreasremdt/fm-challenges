import { ComponentPropsWithoutRef } from "react";
import cx from "classnames";

import Icon, { icons } from "./icon";

type Props = {
  /**
   * An icon to be displayed on top of the text.
   */
  icon?: keyof typeof icons;
} & ComponentPropsWithoutRef<"button">;

export default function Badge({ className, children, icon, ...props }: Props) {
  return (
    <button
      type="button"
      className={cx(
        "rounded-lg bg-gray-300 flex flex-col items-center hover:bg-blue-200 active:bg-blue outline-none active:text-white font-bold text-[13px] py-1.5 gap-2 group focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:bg-blue focus-visible:text-white",
        {
          "px-4": !Boolean(icon),
          "px-2": Boolean(icon),
        },
        className
      )}
      {...props}
    >
      {icon && <Icon name={icon} className="text-blue mt-2 group-active:text-white group-focus-visible:text-white" />}
      {children}
    </button>
  );
}
