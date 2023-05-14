"use client";

import { ComponentPropsWithoutRef, Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import cx from "classnames";
import Icon from "./icon";

type Option = {
  label: string;
  value: string;
};

type Props = {
  /**
   * An array of options to choose from.
   */
  options: Option[];
  /**
   * Gets called once the value changes.
   * @param option The option selected by the user.
   */
  onChange?: (option: Option) => void;
  /**
   * The option currently selected. By default, the first entry of the `options` prop is taken.
   */
  value?: Option;
} & ComponentPropsWithoutRef<"div">;

export default function Select({ options, value = options[0], onChange, className, ...props }: Props) {
  const [selected, setSelected] = useState<Option>(value);

  return (
    <div className={cx("relative w-full", className)} {...props}>
      <Listbox
        value={selected}
        onChange={(option) => {
          setSelected(option);
          onChange?.(option);
        }}
      >
        <Listbox.Button as={Fragment}>
          {({ open }) => (
            <button
              className={cx(
                "h-12 bg-gray-200 rounded-md px-6 text-body2 outline-none transition-shadow w-full text-left inline-flex items-center justify-between",
                {
                  "ring-1 ring-blue": open,
                  "focus:ring-1 focus:ring-blue": !open,
                }
              )}
            >
              {selected.label}
              <Icon
                name="arrow-down"
                className={cx("text-blue transition-transform", {
                  "rotate-180": open,
                })}
              />
            </button>
          )}
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute top-full left-0 mt-4 right-0 bg-white rounded-lg shadow-dropdown outline-none">
            {options.map((option) => (
              <Listbox.Option key={option.value} value={option} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={cx(
                      "px-6 h-12 border-b border-gray-500/20 last:border-b-0 flex items-center justify-between cursor-pointer transition-colors",
                      {
                        "text-primary": active,
                      }
                    )}
                  >
                    {option.label}
                    {selected && <Icon name="check" />}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
