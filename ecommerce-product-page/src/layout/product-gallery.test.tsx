/**
 * @vitest-environment jsdom
 */

import { test, expect } from "vitest";
import { act, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProductGallery from "./product-gallery";
import product from "../data.json";

test("it should render the main image and thumbnails", () => {
  render(<ProductGallery images={product.images} />);

  expect(screen.getByRole("link")).toHaveAttribute("href", "images/image-product-1.jpg");
  expect(screen.getAllByRole("img")).toHaveLength(5);
  expect(screen.getAllByRole("img").at(0)).toHaveAttribute("src", "images/image-product-1.jpg");
  expect(screen.getAllByRole("button")).toHaveLength(6);
  expect(screen.getAllByRole("button").at(0)).toHaveAccessibleName(/show previous image/i);
  expect(screen.getAllByRole("button").at(1)).toHaveAccessibleName(/show next image/i);
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

test("it should display the appropriate image after clicking on a thumbnail", async () => {
  const user = userEvent.setup();

  render(<ProductGallery images={product.images} />);

  await act(() => user.click(screen.getAllByRole("button").at(4) as HTMLButtonElement));

  expect(screen.getByRole("link")).toHaveAttribute("href", "images/image-product-3.jpg");
  expect(screen.getAllByRole("img").at(0)).toHaveAttribute("src", "images/image-product-3.jpg");
});

test("it should cycle through all images by clicking on the prev/next buttons", async () => {
  const user = userEvent.setup();

  render(<ProductGallery images={product.images} />);

  await act(() => user.click(screen.getAllByRole("button").at(0) as HTMLButtonElement));

  expect(screen.getByRole("link")).toHaveAttribute("href", "images/image-product-4.jpg");
  expect(screen.getAllByRole("img").at(0)).toHaveAttribute("src", "images/image-product-4.jpg");

  await act(() => user.click(screen.getAllByRole("button").at(1) as HTMLButtonElement));

  expect(screen.getByRole("link")).toHaveAttribute("href", "images/image-product-1.jpg");
  expect(screen.getAllByRole("img").at(0)).toHaveAttribute("src", "images/image-product-1.jpg");

  await act(() => user.click(screen.getAllByRole("button").at(1) as HTMLButtonElement));

  expect(screen.getByRole("link")).toHaveAttribute("href", "images/image-product-2.jpg");
  expect(screen.getAllByRole("img").at(0)).toHaveAttribute("src", "images/image-product-2.jpg");
});

test("it should open and close the dialog", async () => {
  const user = userEvent.setup();

  render(<ProductGallery images={product.images} />);

  await act(() => user.click(screen.getByRole("link")));

  expect(screen.getByRole("dialog")).toBeInTheDocument();

  const dialog = within(screen.getByRole("dialog"));

  expect(dialog.getAllByRole("button").at(0)).toHaveAccessibleName(/close overlay/i);
  expect(dialog.getAllByRole("button").at(1)).toHaveAccessibleName(/show previous image/i);
  expect(dialog.getAllByRole("button").at(2)).toHaveAccessibleName(/show next image/i);
  expect(dialog.getAllByRole("img").at(0)).toHaveAttribute("src", "images/image-product-1.jpg");

  await act(() => user.click(screen.getAllByRole("button").at(0) as HTMLButtonElement));

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

test("it should cycle through all images within the dialog by clicking on the prev/next buttons", async () => {
  const user = userEvent.setup();

  render(<ProductGallery images={product.images} />);

  await act(() => user.click(screen.getByRole("link")));

  expect(screen.getByRole("dialog")).toBeInTheDocument();

  const dialog = within(screen.getByRole("dialog"));

  await act(() => user.click(dialog.getAllByRole("button").at(1) as HTMLButtonElement));

  expect(dialog.getAllByRole("img").at(0)).toHaveAttribute("src", "images/image-product-4.jpg");

  await act(() => user.click(dialog.getAllByRole("button").at(2) as HTMLButtonElement));

  expect(dialog.getAllByRole("img").at(0)).toHaveAttribute("src", "images/image-product-1.jpg");

  await act(() => user.click(dialog.getAllByRole("button").at(2) as HTMLButtonElement));

  expect(dialog.getAllByRole("img").at(0)).toHaveAttribute("src", "images/image-product-2.jpg");

  await act(() => user.click(dialog.getAllByRole("button").at(1) as HTMLButtonElement));

  expect(dialog.getAllByRole("img").at(0)).toHaveAttribute("src", "images/image-product-1.jpg");

  await act(() => user.keyboard("{Escape}"));

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
