/**
 * @vitest-environment jsdom
 */

import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Badge from "./badge";
import styles from "./badge.module.css";

test("it should render the badge in its variants", () => {
  const { rerender } = render(<Badge>Hello, world</Badge>);

  expect(screen.getByText(/hello, world/i)).toHaveClass(styles.normal);

  rerender(<Badge variant="small">Hello, world</Badge>);

  expect(screen.getByText(/hello, world/i)).toHaveClass(styles.small);
});

test("it should apply other props", () => {
  render(
    <Badge data-test="123" className="example">
      Hello, world
    </Badge>
  );

  expect(screen.getByText(/hello, world/i)).toHaveClass("example");
  expect(screen.getByText(/hello, world/i)).toHaveAttribute("data-test", "123");
});
