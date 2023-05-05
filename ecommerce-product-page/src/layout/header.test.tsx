/**
 * @vitest-environment jsdom
 */

import { test, expect } from "vitest";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Header from "./header";

test("it should render the logo, nav links, children, and avatar", () => {
  render(
    <Header>
      <p>Header children</p>
    </Header>
  );

  expect(screen.getAllByRole("img").at(0)).toHaveAttribute("alt", "sneakers logo");
  expect(screen.getByTestId("navigation-toggle")).toHaveAccessibleName(/show mobile navigation/i);
  expect(screen.getByText(/collections/i)).toBeInTheDocument();
  expect(screen.getAllByRole("link")).toHaveLength(5);
  expect(screen.getByText(/header children/i)).toBeInTheDocument();
  expect(screen.getAllByRole("button").at(1)).toHaveAccessibleName(/your profile/i);
});

test("it should open and close the mobile navigation", async () => {
  const user = userEvent.setup();

  render(<Header />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  await act(() => user.click(screen.getAllByRole("button").at(0) as HTMLButtonElement));

  expect(screen.getByRole("dialog")).toBeInTheDocument();
  expect(screen.getByTestId("navigation-toggle")).toHaveAccessibleName(/close mobile navigation/i);
  expect(screen.getAllByRole("button").at(0)).toHaveAccessibleName(/close mobile navigation/i);
  expect(screen.getByRole("dialog")).toHaveTextContent(/collections/i);

  await act(() => user.click(screen.getAllByRole("button").at(0) as HTMLButtonElement));

  expect(screen.getByTestId("navigation-toggle")).toHaveAccessibleName(/show mobile navigation/i);
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
