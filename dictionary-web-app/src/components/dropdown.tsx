import type { Accessor, ParentComponent, Setter, JSX } from "solid-js";
import { createSignal, onCleanup, Show, createContext, useContext, splitProps } from "solid-js";

import styles from "./dropdown.module.css";

type OptionProps = JSX.IntrinsicElements["button"] & {
  value?: string;
};

type DropdownProps = Omit<JSX.IntrinsicElements["div"], "onChange"> & {
  onChange: (value: any) => void;
};

type DropdownComponent = {
  Trigger: ParentComponent<JSX.IntrinsicElements["button"]>;
  Menu: ParentComponent<JSX.IntrinsicElements["div"]>;
  Option: ParentComponent<OptionProps>;
} & ParentComponent<DropdownProps>;

type ContextType = {
  open: Accessor<boolean>;
  setOpen: Setter<boolean>;
  triggerId: string;
  menuId: string;
  handleSelect: (value?: string) => void;
};

const DropdownContext = createContext<ContextType>();

const Dropdown: DropdownComponent = (props) => {
  const [open, setOpen] = createSignal(false);
  const [local, rest] = splitProps(props, ["children", "class", "onChange"]);

  const triggerId = `toggle-${Math.random().toString(16).slice(2)}`;
  const menuId = `menu-${Math.random().toString(16).slice(2)}`;

  const handleSelect = (value?: string) => {
    local.onChange?.(value);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);

    if (document.activeElement !== document.getElementById(triggerId)) {
      document.getElementById(triggerId)?.focus();
    }
  };

  const handleClick = (event: MouseEvent) => {
    if (open() && !(event.target as HTMLElement).closest("[data-menu]")) {
      handleClose();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (open()) {
      const trigger = document.getElementById(triggerId);
      const menu = document.getElementById(menuId);
      const items = menu?.querySelectorAll("button") || [];
      const index = Array.from(items).indexOf(document.activeElement as HTMLButtonElement);

      switch (event.key) {
        case "Escape":
        case "Tab":
          handleClose();
          break;

        case "ArrowDown": {
          if (document.activeElement === trigger || document.activeElement === items[items.length - 1]) {
            items[0].focus();
          } else {
            items[index + 1].focus();
          }
          break;
        }

        case "ArrowUp": {
          if (document.activeElement === trigger || document.activeElement === items[0]) {
            items[items.length - 1].focus();
          } else {
            items[index - 1].focus();
          }

          break;
        }
      }
    }
  };

  document.addEventListener("click", handleClick);
  document.addEventListener("keydown", handleKeyDown);

  onCleanup(() => {
    document.removeEventListener("click", handleClick);
    document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <DropdownContext.Provider value={{ open, setOpen, triggerId, menuId, handleSelect }}>
      <div data-menu classList={{ [styles.container]: true, [local.class as string]: Boolean(local.class) }} {...rest}>
        {local.children}
      </div>
    </DropdownContext.Provider>
  );
};

const Trigger: ParentComponent<JSX.HTMLAttributes<HTMLButtonElement>> = (props) => {
  const context = useContext(DropdownContext);
  const [local, rest] = splitProps(props, ["children", "class"]);

  return (
    <Show when={context}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={context!.open()}
        aria-controls={context!.open() ? context!.menuId : undefined}
        id={context!.triggerId}
        onClick={() => context!.setOpen(!context!.open())}
        classList={{ [styles.trigger]: true, [local.class as string]: Boolean(local.class) }}
        {...rest}
      >
        {local.children}

        <svg width="14" height="8" viewBox="0 0 14 8" aria-hidden="true" class={styles.icon}>
          <path fill="none" stroke="currentColor" stroke-width="1.5" d="m1 1 6 6 6-6" />
        </svg>
      </button>
    </Show>
  );
};

const Menu: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const context = useContext(DropdownContext);
  const [local, rest] = splitProps(props, ["children", "class"]);

  return (
    <Show when={context?.open()}>
      <div
        role="menu"
        aria-labelledby={context!.triggerId}
        id={context!.menuId}
        classList={{ [styles.menu]: true, [local.class as string]: Boolean(local.class) }}
        {...rest}
      >
        {local.children}
      </div>
    </Show>
  );
};

const Option: ParentComponent<OptionProps> = (props) => {
  const context = useContext(DropdownContext);
  const [local, rest] = splitProps(props, ["children", "class", "value"]);

  return (
    <Show when={context}>
      <button
        data-value={local.value}
        type="button"
        role="menuitem"
        tabIndex={-1}
        onClick={() => context!.handleSelect(local.value)}
        classList={{ [styles.item]: true, [local.class as string]: Boolean(local.class) }}
        {...rest}
      >
        {local.children}
      </button>
    </Show>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Option = Option;
Dropdown.Menu = Menu;

export default Dropdown;
