/**
 * @vitest-environment jsdom
 */

import { test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProductThumbnails from "./product-thumbnails";
import styles from "./product-thumbnails.module.css";
import product from "../data.json";

test("it should render all images inside a button", () => {
  render(<ProductThumbnails images={product.images} active={1} onSelect={vi.fn()} />);

  expect(screen.getAllByRole("button")).toHaveLength(4);
  expect(screen.getAllByRole("img")).toHaveLength(4);
  expect(screen.getAllByRole("img").at(0)).toHaveAttribute("alt", "pair of white sneakers from front");
  expect(screen.getAllByRole("img").at(0)).toHaveAttribute("src", "images/image-product-1-thumbnail.jpg");
});

test("it should apply a special class to the active thumbnail", () => {
  render(<ProductThumbnails images={product.images} active={1} onSelect={vi.fn()} />);

  expect(screen.getAllByRole("button").at(0)).not.toHaveClass(styles.active);
  expect(screen.getAllByRole("button").at(1)).toHaveClass(styles.active);
});

test("it should call the `onSelect` prop when a thumbnail is clicked", async () => {
  const spy = vi.fn();
  const user = userEvent.setup();

  render(<ProductThumbnails images={product.images} active={1} onSelect={spy} />);

  await user.click(screen.getAllByRole("button").at(0) as HTMLButtonElement);

  expect(spy).toHaveBeenCalledWith(0);

  await user.click(screen.getAllByRole("button").at(3) as HTMLButtonElement);

  expect(spy).toHaveBeenCalledWith(3);
});
