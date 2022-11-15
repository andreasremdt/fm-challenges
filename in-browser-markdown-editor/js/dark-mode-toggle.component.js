import { html, render } from "https://unpkg.com/lit-html@2.4.0/lit-html.js";

class DarkModeToggle extends HTMLElement {
  #checked = this.hasAttribute("checked") || false;

  constructor() {
    super();

    this.#render();
    this.addEventListener("click", this.#handleClick);
  }

  #handleClick(event) {
    event.preventDefault();

    this.#checked = !this.#checked;

    this.dispatchEvent(
      new CustomEvent("toggle", {
        detail: {
          enabled: this.#checked,
        },
      })
    );
    this.#render();
  }

  #render() {
    render(this.#template, this);
  }

  get #template() {
    return html`
      <div class="dark-mode-toggle">
        <svg aria-hidden="true" class="icon" width="18" height="18" data-checked="${this.#checked}">
          <use href="./icons/symbol-defs.svg#dark-mode" />
        </svg>
        <button
          type="button"
          role="switch"
          class="toggle"
          aria-checked="${this.#checked}"
          data-checked="${this.#checked}"
        >
          <span class="sr-only">${this.#checked ? "Disable" : "Enable"} dark mode</span>
          <span></span>
        </button>
        <svg aria-hidden="true" class="icon" width="18" height="18" data-checked="${!this.#checked}">
          <use href="./icons/symbol-defs.svg#light-mode" />
        </svg>
      </div>
    `;
  }
}

export default DarkModeToggle;
