/**
 * @vitest-environment jsdom
 */

import { test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Navigation from "./navigation";

test("it should render the desktop navigation", () => {
  render(<Navigation links={["Link #1", "Link #2"]} open={false} onClose={vi.fn()} />);

  expect(screen.getByText(/link #1/i)).toBeInTheDocument();
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

test("it should render the mobile navigation if `open` is true", () => {
  render(<Navigation links={["Link #1", "Link #2"]} open onClose={vi.fn()} />);

  expect(screen.getAllByText(/link #1/i)).toHaveLength(2);
  expect(screen.getByRole("dialog")).toBeInTheDocument();
});

test("it should open and close the mobile navigation", async () => {
  const user = userEvent.setup();
  const spy = vi.fn();

  render(<Navigation links={["Link #1", "Link #2"]} open onClose={spy} />);

  await user.click(screen.getByRole("button"));

  expect(spy).toHaveBeenCalled();
});
