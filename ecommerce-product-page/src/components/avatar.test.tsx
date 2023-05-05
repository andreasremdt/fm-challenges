/**
 * @vitest-environment jsdom
 */

import { vi, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Avatar from "./avatar";

test("it should render the avatar button", () => {
  render(<Avatar image="/images/john-doe.jpg" name="John Doe" />);

  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("alt", "avatar of John Doe");
  expect(screen.getByRole("img")).toHaveAttribute("src", "/images/john-doe.jpg");
});

test("it should render in the given size", () => {
  const { rerender } = render(<Avatar image="/images/john-doe.jpg" name="John Doe" />);

  expect(screen.getByRole("button")).toHaveAttribute("style", "--width: 50px;");

  rerender(<Avatar image="/images/john-doe.jpg" name="John Doe" width={100} />);

  expect(screen.getByRole("button")).toHaveAttribute("style", "--width: 100px;");
});

test("it should merge class names and inline styles", () => {
  render(<Avatar image="/images/john-doe.jpg" name="John Doe" className="test1" style={{ top: 0 }} />);

  expect(screen.getByRole("button")).toHaveClass("test1");
  expect(screen.getByRole("button")).toHaveAttribute("style", "--width: 50px; top: 0px;");
});

test("it should apply other props", async () => {
  const user = userEvent.setup();
  const spy = vi.fn();

  render(<Avatar image="/images/john-doe.jpg" name="John Doe" onClick={spy} data-test="123" />);

  expect(screen.getByRole("button")).toHaveAttribute("data-test", "123");

  await user.click(screen.getByRole("button"));

  expect(spy).toHaveBeenCalled();
});
