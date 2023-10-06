import type { InputValue, Listeners, Rules } from "./types";
import { getErrorElement, inputFactory } from "./utils";

export default class Validator {
  #form: HTMLFormElement;
  #inputs: Map<HTMLInputElement, InputValue>;
  #rules: Rules = {};
  #listeners: Listeners = {};

  constructor(selector: string) {
    let form = document.querySelector(selector) as HTMLFormElement;

    if (!form) {
      throw new Error(`Can't find a form with the selector "${selector}"`);
    }

    this.#form = form;
    this.#inputs = inputFactory(form);
  }

  register() {
    this.#form.setAttribute("novalidate", "novalidate");
    this.#form.setAttribute("aria-live", "assertive");
    this.#form.addEventListener("submit", this.#handleSubmit);
    this.#form.addEventListener("input", this.#handleInput);
    this.#form.addEventListener("blur", this.#handleBlur, true);

    return this;
  }

  unregister() {
    this.#form.removeAttribute("novalidate");
    this.#form.removeAttribute("aria-live");
    this.#form.removeEventListener("submit", this.#handleSubmit);
    this.#form.removeEventListener("input", this.#handleInput);
    this.#form.removeEventListener("blur", this.#handleBlur, true);

    return this;
  }

  rules(rules: Rules) {
    this.#rules = rules;

    return this;
  }

  on(event: "validate", fn: (formData: FormData) => string | void): this;
  on(event: "submit", fn: (formData: FormData) => void): this;
  on(event: "validate" | "submit", fn: (formData: FormData) => string | void) {
    this.#listeners[event] = fn;

    return this;
  }

  off(event: "validate" | "submit") {
    delete this.#listeners[event];

    return this;
  }

  emit(event: "validate" | "submit", formData: FormData) {
    if (this.#listeners[event]) {
      return this.#listeners[event](formData) ?? null;
    }

    return null;
  }

  #validate = (input: InputValue) => {
    let error = this.#rules[input.element.name](input.element);

    input.error = Boolean(error);

    if (error) {
      input.message = error;
    }

    this.#render(input);
  };

  #handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    this.#inputs.forEach(this.#validate);

    let formData = new FormData(this.#form);
    let error = this.emit("validate", formData);
    let allFieldsAreOkay = Array.from(this.#inputs).every(([_, input]) => !input.error);

    if (allFieldsAreOkay) {
      if (error) {
        Array.from(this.#inputs).forEach(([_, input], index) => {
          if (index === 0) input.message = error;
          input.error = true;

          this.#render(input);
        });
      } else {
        this.emit("submit", formData);
      }
    }
  };

  #handleBlur = (event: FocusEvent) => {
    const input = this.#inputs.get(event.target as HTMLInputElement);

    if (input) {
      this.#validate(input);
    }
  };

  #handleInput = (event: Event) => {
    const input = this.#inputs.get(event.target as HTMLInputElement);

    if (input?.error) {
      this.#validate(input);
    }
  };

  #render(input: InputValue) {
    if (input.error) {
      this.#showError(input);
    } else {
      this.#hideError(input);
    }
  }

  #hideError(input: InputValue) {
    input.element.nextElementSibling?.remove();
    input.element.removeAttribute("aria-invalid");
    input.element.removeAttribute("aria-describedby");
  }

  #showError(input: InputValue) {
    let error = getErrorElement(input);

    input.element.setAttribute("aria-invalid", "true");

    if (error) {
      input.element.setAttribute("aria-describedby", `${input.element.name}-error`);
      input.element.insertAdjacentElement("afterend", error);
    }
  }
}
