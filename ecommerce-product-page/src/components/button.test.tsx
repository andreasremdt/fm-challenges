/**
 * @vitest-environment jsdom
 */

import { test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Button from "./button";
import styles from "./button.module.css";

test("it should render the button in its variants", () => {
  const { rerender } = render(<Button>Hello, world</Button>);

  expect(screen.getByRole("button")).toHaveTextContent(/hello, world/i);
  expect(screen.getByRole("button")).toHaveClass(styles.primary);
  rerender(<Button variant="secondary">Hello, world</Button>);
  expect(screen.getByRole("button")).toHaveClass(styles.secondary);
  rerender(<Button variant="transparent">Hello, world</Button>);
  expect(screen.getByRole("button")).toHaveClass(styles.transparent);
});

test("it should apply the type of button by default", () => {
  const { rerender } = render(<Button>Hello, world</Button>);

  expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  rerender(<Button type="submit">Hello, world</Button>);
  expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
});

test("it should apply other props", () => {
  render(
    <Button data-test="123" className="example">
      Hello, world
    </Button>
  );

  expect(screen.getByRole("button")).toHaveClass("example");
  expect(screen.getByRole("button")).toHaveAttribute("data-test", "123");
});

test("it should forward a given ref", () => {
  const spy = vi.fn();
  render(<Button ref={spy}>Hello, world</Button>);

  expect(spy).toHaveBeenCalled();
});
