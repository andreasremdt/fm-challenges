/**
 * @vitest-environment jsdom
 */

import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Container from "./container";
import styles from "./container.module.css";

test("it should render the container in its variants", () => {
  const { rerender } = render(<Container>Hello, world</Container>);

  expect(screen.getByText(/hello, world/i)).toHaveClass(styles.normal);
  rerender(<Container variant="small">Hello, world</Container>);
  expect(screen.getByText(/hello, world/i)).toHaveClass(styles.small);
});

test("it should apply other props", () => {
  render(
    <Container data-test="123" className="example">
      Hello, world
    </Container>
  );

  expect(screen.getByText(/hello, world/i)).toHaveClass("example");
  expect(screen.getByText(/hello, world/i)).toHaveAttribute("data-test", "123");
});

test("it should render as any given HTML element", () => {
  render(<Container as="article">Hello, world</Container>);

  expect(screen.getByRole("article")).toBeInTheDocument();
});
