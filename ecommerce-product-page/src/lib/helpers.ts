import type { CartEntry } from "@/types";

export function cx(...classes: (string | undefined | { [key: string]: boolean })[]) {
  return classes
    .filter(Boolean)
    .map((entry) => {
      if (typeof entry === "object") {
        return Object.entries(entry)
          .filter(([_, value]) => value)
          .map(([key]) => key)
          .join(" ");
      }

      return entry;
    })
    .join(" ");
}

export function getThumbnail(src: string) {
  const [path, extension] = src.split(/\./);

  return `${path}-thumbnail.${extension}`;
}

export function getDiscount(price: number, discount?: number) {
  if (!discount) {
    return price;
  }

  return Number((price - price * discount).toFixed(2));
}

export function formatCurrency(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function formatDiscount(discount: number) {
  return `${discount * 100}%`;
}

export function getTotal(price: number, quantity: number) {
  return price * quantity;
}

export function getTotalCartQuantity(entries: CartEntry[]) {
  return entries.reduce((current, accumulator) => current + accumulator.quantity, 0);
}
