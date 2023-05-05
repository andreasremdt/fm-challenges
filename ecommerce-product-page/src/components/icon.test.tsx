/**
 * @vitest-environment jsdom
 */

import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Icon from "./icon";

test("it should render an icon", () => {
  render(<Icon name="close" />);

  expect(screen.getByTestId("icon")).toBeInTheDocument();
  expect(screen.getByTestId("icon")).toHaveAttribute("aria-hidden", "true");
});

test("it should apply other props", () => {
  render(<Icon name="close" data-test="123" className="example" />);

  expect(screen.getByTestId("icon")).toHaveClass("example");
  expect(screen.getByTestId("icon")).toHaveAttribute("data-test", "123");
});
