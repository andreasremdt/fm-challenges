import { html, render } from "https://unpkg.com/lit-html@2.4.0/lit-html.js";
import { formatDate } from "./utils.js";

class DocumentEntry extends HTMLElement {
  constructor() {
    super();

    this.#render();
  }

  #render() {
    render(this.#template, this);
  }

  get #template() {
    return html`
      <a class="document-entry" href="${this.getAttribute("href")}">
        <svg aria-hidden="true" class="icon" width="14" height="16">
          <use href="./icons/symbol-defs.svg#document" />
        </svg>
        <time datetime="${this.getAttribute("date")}" class="date">${formatDate(this.getAttribute("date"))}</time>
        <span class="title">${this.getAttribute("title")}</span>
      </a>
    `;
  }
}

export default DocumentEntry;
