/**
 * @vitest-environment jsdom
 */

import { test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from "./input";

test("it should render the input", () => {
  render(<Input />);

  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("it should apply other props", async () => {
  const user = userEvent.setup();
  const spy = vi.fn();

  render(
    <Input
      data-test="123"
      className="example"
      onChange={spy}
      defaultValue="Hello, world"
      placeholder="Example placeholder"
    />
  );

  expect(screen.getByPlaceholderText(/example placeholder/i)).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toHaveAttribute("data-test", "123");
  expect(screen.getByRole("textbox")).toHaveClass("example");
  expect(screen.getByRole("textbox")).toHaveValue("Hello, world");

  await user.type(screen.getByRole("textbox"), "test");

  expect(spy).toHaveBeenCalled();
});

test("it should forward a given ref", () => {
  const spy = vi.fn();

  render(<Input ref={spy} />);

  expect(spy).toHaveBeenCalled();
});
