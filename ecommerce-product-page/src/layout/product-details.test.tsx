/**
 * @vitest-environment jsdom
 */

import { test, expect, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProductDetails from "./product-details";
import product from "../data.json";

test("it should render product details", () => {
  render(<ProductDetails product={product} onAddToCart={vi.fn()} />);

  expect(screen.getByText(/sneaker company/i)).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/fall limited edition sneakers/i);
  expect(screen.getByText(/\$125.00/i)).toBeInTheDocument();
  expect(screen.getByText(/50%/i)).toBeInTheDocument();
  expect(screen.getByText(/\$250.00/i)).toBeInTheDocument();
  expect(screen.getByText(/add to cart/i)).toBeInTheDocument();
  expect(screen.getAllByRole("button").at(0)).toHaveAccessibleName(/decrease number of items/i);
  expect(screen.getAllByRole("button").at(1)).toHaveAccessibleName(/increase number of items/i);
});

test("it should decrease and increase the quantity and call the prop `onAddToCart`", async () => {
  const spy = vi.fn();
  const user = userEvent.setup();

  render(<ProductDetails product={product} onAddToCart={spy} />);

  expect(screen.getByRole("spinbutton")).toHaveValue(0);

  const buttonDecrease = screen.getAllByRole("button").at(0) as HTMLButtonElement;
  const buttonIncrease = screen.getAllByRole("button").at(1) as HTMLButtonElement;

  expect(buttonDecrease).toBeDisabled();

  await act(() => user.click(buttonIncrease));

  expect(buttonDecrease).not.toBeDisabled();
  expect(screen.getByRole("spinbutton")).toHaveValue(1);

  await act(() => user.click(buttonDecrease));

  expect(buttonDecrease).toBeDisabled();
  expect(screen.getByRole("spinbutton")).toHaveValue(0);

  await act(() => user.type(screen.getByRole("spinbutton"), "11"));

  expect(screen.getByRole("spinbutton")).toHaveValue(11);

  await act(() => user.click(buttonIncrease));

  expect(buttonIncrease).toBeDisabled();
  expect(screen.getByRole("spinbutton")).toHaveValue(12);

  await act(() => user.type(screen.getByRole("spinbutton"), "14"));

  expect(screen.getByRole("spinbutton")).toHaveValue(12);

  await act(() => user.click(screen.getByText(/add to cart/i)));

  expect(spy).toHaveBeenCalledWith(product, 12);
  expect(screen.getByRole("spinbutton")).toHaveValue(0);

  await act(() => user.click(screen.getByText(/add to cart/i)));

  expect(spy).toHaveBeenCalledTimes(1);
});
