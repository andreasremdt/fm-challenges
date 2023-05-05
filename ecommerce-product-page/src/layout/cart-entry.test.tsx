/**
 * @vitest-environment jsdom
 */

import { test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CartEntry from "./cart-entry";
import product from "../data.json";

test("it should render a correctly formated cart entry", () => {
  render(
    <CartEntry
      onRemove={vi.fn()}
      entry={{
        product,
        quantity: 2,
      }}
    />
  );

  expect(screen.getByRole("img")).toHaveAttribute("src", "/images/image-product-1-thumbnail.jpg");
  expect(screen.getByRole("img")).toHaveAttribute("alt", "pair of white sneakers from front");
  expect(screen.getByRole("heading")).toHaveTextContent(/fall limited edition sneakers/i);
  expect(screen.getByText(/\$125.00 x 2/i)).toBeInTheDocument();
  expect(screen.getByText(/\$250.00/i)).toBeInTheDocument();
});

test("it should call the `onRemove` prop when the remove button is clicked", async () => {
  const user = userEvent.setup();
  const spy = vi.fn();

  render(
    <CartEntry
      onRemove={spy}
      entry={{
        product,
        quantity: 2,
      }}
    />
  );

  expect(screen.getByRole("button")).toHaveAccessibleName(/remove item from cart/i);

  await user.click(screen.getByRole("button"));

  expect(spy).toHaveBeenCalled();
});
