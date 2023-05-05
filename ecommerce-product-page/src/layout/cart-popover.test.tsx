/**
 * @vitest-environment jsdom
 */

import { test, expect, vi } from "vitest";
import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CartPopover from "./cart-popover";
import product from "../data.json";

test("it should render the cart button", () => {
  render(<CartPopover entries={[{ quantity: 3, product }]} onRemoveCartEntry={vi.fn()} />);

  expect(screen.getByRole("button")).toHaveAccessibleName(/show your cart/i);
  expect(screen.getByRole("button")).toHaveTextContent(/3/i);
});

test("it should open and close the cart popover", async () => {
  const user = userEvent.setup();

  render(<CartPopover entries={[{ quantity: 3, product }]} onRemoveCartEntry={vi.fn()} />);

  expect(screen.queryByRole("heading")).not.toBeInTheDocument();

  await act(() => user.click(screen.getByTestId("cart-toggle")));

  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(/cart/i);

  await act(() => user.click(screen.getByTestId("cart-toggle")));

  expect(screen.queryByRole("heading")).not.toBeInTheDocument();
});

test("it should render an empty state if no entries are in the cart", async () => {
  const user = userEvent.setup();

  render(<CartPopover entries={[]} onRemoveCartEntry={vi.fn()} />);

  await act(() => user.click(screen.getByTestId("cart-toggle")));

  expect(screen.getByText(/your cart is empty./i)).toBeInTheDocument();
  expect(screen.queryByText(/checkout/i)).not.toBeInTheDocument();
});

test("it should render cart entries", async () => {
  const user = userEvent.setup();

  render(<CartPopover entries={[{ quantity: 3, product }]} onRemoveCartEntry={vi.fn()} />);

  await act(() => user.click(screen.getByTestId("cart-toggle")));

  expect(screen.queryByText(/your cart is empty./i)).not.toBeInTheDocument();
  expect(screen.getByRole("article")).toHaveTextContent(/fall limited edition sneakers/i);
  expect(screen.getByText(/checkout/i)).toBeInTheDocument();
});

test("it should call the `onRemoveCartEntry` prop when the remove button is clicked", async () => {
  const user = userEvent.setup();
  const spy = vi.fn();

  render(<CartPopover entries={[{ quantity: 3, product }]} onRemoveCartEntry={spy} />);

  await act(() => user.click(screen.getByTestId("cart-toggle")));
  await user.click(within(screen.getByRole("article")).getByRole("button"));

  expect(spy).toHaveBeenCalledWith({ product, quantity: 3 });
});
