import { describe, test, expect } from "vitest";

import type { CartEntry, Product } from "@/types";

import {
  cx,
  formatCurrency,
  formatDiscount,
  getThumbnail,
  getTotal,
  getTotalCartQuantity,
  getDiscount,
} from "./helpers";

describe("cx()", () => {
  test("it should join classes together", () => {
    expect(cx("class1", "class2")).toEqual("class1 class2");
  });

  test("it should ignore falsy values", () => {
    expect(cx("class1", undefined, "class2")).toEqual("class1 class2");
  });

  test("it should add truthy object keys", () => {
    expect(
      cx(
        "class1",
        {
          class2: true,
          class3: false,
        },
        "class4"
      )
    ).toEqual("class1 class2 class4");
  });
});

describe("getThumbnail()", () => {
  test("it should return the correct thumbnail path", () => {
    expect(getThumbnail("/images/example.jpg")).toEqual("/images/example-thumbnail.jpg");
    expect(getThumbnail("/images/example.png")).toEqual("/images/example-thumbnail.png");
    expect(getThumbnail("/images/123-test.webp")).toEqual("/images/123-test-thumbnail.webp");
  });
});

describe("getDiscount()", () => {
  test("it should return the correctly calculated discount", () => {
    expect(getDiscount(100, 0.2)).toEqual(80);
    expect(getDiscount(100, 0.5)).toEqual(50);
    expect(getDiscount(1132.33, 0.12)).toEqual(996.45);
  });

  test("it should return the plain price if no discount has been specified", () => {
    expect(getDiscount(100)).toEqual(100);
  });
});

describe("formatCurrency()", () => {
  test("it should format a number to a currency string", () => {
    expect(formatCurrency(80)).toEqual("$80.00");
    expect(formatCurrency(1.99)).toEqual("$1.99");
  });
});

describe("formatDiscount()", () => {
  test("it should format a number to a discount string", () => {
    expect(formatDiscount(0.5)).toEqual("50%");
  });
});

describe("getTotal()", () => {
  test("it should return the total price", () => {
    expect(getTotal(100, 3)).toEqual(300);
    expect(getTotal(5.5, 2)).toEqual(11);
  });
});

describe("getTotalCartQuantity()", () => {
  test("it should return the total number of items in a cart", () => {
    const entries: CartEntry[] = [
      {
        product: {} as Product,
        quantity: 2,
      },
      {
        product: {} as Product,
        quantity: 1,
      },
    ];

    expect(getTotalCartQuantity(entries)).toEqual(3);
  });
});
