import type { InputValue, Listeners, FieldRules, GlobalRules } from "./types";
import { getErrorElement, inputFactory } from "./utils";

export default class Validator {
  #form: HTMLFormElement;
  #inputs: Map<HTMLInputElement, InputValue>;
  #fieldRules: FieldRules = {};
  #globalRules: GlobalRules | null = null;
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

  setFieldRules(fieldRules: FieldRules) {
    this.#fieldRules = fieldRules;

    return this;
  }

  setGlobalRules(globalRules: GlobalRules) {
    this.#globalRules = globalRules;

    return this;
  }

  on(event: string, fn: (data: any) => void) {
    this.#listeners[event] = fn;
  }

  off(event: string) {
    delete this.#listeners[event];
  }

  emit(event: string, data: any) {
    if (this.#listeners[event]) {
      this.#listeners[event](data);
    }
  }

  #validate = (input: InputValue) => {
    let error = this.#fieldRules[input.element.name](input.element);

    input.error = Boolean(error);
    input.message = error;

    this.#render(input);
  };

  #handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();

    this.#inputs.forEach(this.#validate);

    let formData = new FormData(this.#form);
    let error = this.#globalRules?.(formData) ?? null;
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
