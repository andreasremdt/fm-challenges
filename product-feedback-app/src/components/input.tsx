import { ComponentPropsWithoutRef, useId } from "react";
import cx from "classnames";

type Props = {
  /**
   * If provided, renders the error below the input and marks it as invalid.
   */
  error?: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ className, error, ...props }: Props) {
  const uuid = useId();

  return (
    <>
      <input
        {...props}
        aria-invalid={Boolean(error)}
        aria-labelledby={Boolean(error) ? uuid : undefined}
        className={cx(
          "h-12 bg-gray-200 rounded-md px-6 text-body2 outline-none transition-shadow w-full",
          {
            "ring-1 ring-danger": Boolean(error),
            "focus:ring-1 focus:ring-blue": !Boolean(error),
          },
          className
        )}
      />
      {error && (
        <p className="text-h4 text-danger mt-1" id={uuid}>
          {error}
        </p>
      )}
    </>
  );
}
