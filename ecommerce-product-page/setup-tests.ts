import { vi } from "vitest";
import "@testing-library/jest-dom/extend-expect";

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
