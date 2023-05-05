/**
 * @vitest-environment jsdom
 */

import { test, expect } from "vitest";
import { act, screen } from "@testing-library/react";

test("it should mount the app", async () => {
  const div = document.createElement("div");
  div.id = "root";
  document.body.append(div);

  await act(() => import("./main"));

  expect(screen.getByText(/fall limited edition sneakers/i)).toBeInTheDocument();
});
