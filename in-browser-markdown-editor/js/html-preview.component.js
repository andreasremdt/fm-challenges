import "https://unpkg.com/marked@4.1.1/marked.min.js";
import { html, render } from "https://unpkg.com/lit-html@2.4.0/lit-html.js";
import { unsafeHTML } from "https://unpkg.com/lit-html@2.4.0/directives/unsafe-html.js";

class HtmlPreview extends HTMLElement {
  #content = "";

  constructor() {
    super();

    this.#render();
  }

  #render() {
    render(this.#template, this);
  }

  get #template() {
    return html`<div class="content">${unsafeHTML(marked.parse(this.#content))}</div>`;
  }

  set content(value) {
    this.#content = value;

    this.#render();
  }

  get content() {
    return this.#content;
  }
}

export default HtmlPreview;
