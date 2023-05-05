/**
 * @vitest-environment jsdom
 */

import { test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Typography from "./typography";
import styles from "./typography.module.css";

test("it should render the a paragraph by default", () => {
  render(<Typography>Hello, World</Typography>);

  expect(screen.getByText(/hello, world/i, { selector: "p" })).toBeInTheDocument();
});

test("it should render as any other element", () => {
  const { rerender } = render(<Typography as="h1" />);

  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();

  rerender(<Typography as="article" />);

  expect(screen.getByRole("article")).toBeInTheDocument();
});

test("it should apply other props", async () => {
  const user = userEvent.setup();
  const spy = vi.fn();

  render(
    <Typography data-test="123" className="example" onClick={spy}>
      Hello, World
    </Typography>
  );

  expect(screen.getByText(/hello, world/i)).toHaveAttribute("data-test", "123");
  expect(screen.getByText(/hello, world/i)).toHaveClass("example");

  await user.click(screen.getByText(/hello, world/i));

  expect(spy).toHaveBeenCalled();
});

test("it should apply the proper class for variant", () => {
  const { rerender } = render(<Typography as="h1" variant="h1" />);

  expect(screen.getByRole("heading")).toHaveClass(styles.h1);

  rerender(<Typography as="h1" variant="h4" />);

  expect(screen.getByRole("heading")).toHaveClass(styles.h4);
});
