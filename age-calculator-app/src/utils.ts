import type { InputValue } from "./types";

export function inputFactory(form: HTMLFormElement) {
  const map = new Map<HTMLInputElement, InputValue>();

  form.querySelectorAll("input").forEach((input) => {
    map.set(input, { element: input, error: false, message: null });
  });

  return map;
}

export function getErrorElement(input: InputValue) {
  let existing = input.element.nextElementSibling as HTMLParagraphElement | null;

  if (!input.message) {
    return null;
  }

  if (existing) {
    existing.textContent = input.message;

    return existing;
  }

  let helperText = document.createElement("p");

  helperText.textContent = input.message;
  helperText.className = "form-control__error";
  helperText.id = `${input.element.name}-error`;

  return helperText;
}

export function getDateDiff(date: string) {
  let difference = new Date(Date.now() - new Date(date).getTime());

  return {
    years: difference.getFullYear() - 1970,
    months: difference.getMonth(),
    days: difference.getDate() - 1,
  };
}

export function animate(element: Element, to: number) {
  if (matchMedia("prefers-reduced-motion: reduce").matches) {
    element.textContent = String(to);

    return;
  }

  const DURATION = 1000;
  let startTimestamp: number | null = null;

  function step(timestamp: number) {
    if (!startTimestamp) {
      startTimestamp = timestamp;
    }

    let progress = Math.min((timestamp - startTimestamp) / DURATION, 1);

    element.textContent = String(Math.floor(progress * to));

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}
