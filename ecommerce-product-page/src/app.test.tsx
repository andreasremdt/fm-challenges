/**
 * @vitest-environment jsdom
 */

import { test, expect } from "vitest";
import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./app";

test("it add and remove entries from the cart", async () => {
  const user = userEvent.setup();

  render(<App />);

  await act(() => user.click(screen.getByTestId("cart-toggle")));

  expect(screen.getByText(/your cart is empty./i)).toBeInTheDocument();

  await act(() => user.click(screen.getByRole("button", { name: /increase number of items/i })));

  expect(screen.queryByText(/your cart is empty./i)).not.toBeInTheDocument();

  await act(() => user.click(screen.getByText(/add to cart/i)));

  expect(screen.getByTestId("cart-toggle")).toHaveTextContent(/1/i);

  await act(() => user.click(screen.getByTestId("cart-toggle")));

  expect(screen.getByTestId("cart-popover")).toHaveTextContent(/fall limited edition sneakers/i);
  expect(screen.getByTestId("cart-popover")).toHaveTextContent(/\$125.00 x 1/i);

  await act(() =>
    user.click(within(screen.getByTestId("cart-popover")).getByRole("button", { name: /remove item from cart/i }))
  );

  expect(screen.getByText(/your cart is empty./i)).toBeInTheDocument();
});
