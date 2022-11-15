import DocumentEntry from "./document-entry.component.js";
import DarkModeToggle from "./dark-mode-toggle.component.js";
import HtmlPreview from "./html-preview.component.js";

class App {
  $ = {
    elements: {
      navigation: document.querySelector("[data-navigation]"),
      main: document.querySelector("[data-main]"),
      editor: document.querySelector("[data-editor]"),
      preview: document.querySelector("[data-preview]"),
      dialog: document.querySelector("[data-dialog]"),
    },
    buttons: {
      toggleNavigation: document.querySelector('[data-action="toggle-navigation"]'),
      toggleDeleteDialog: document.querySelector('[data-action="delete"]'),
      togglePreview: document.querySelector('[data-action="toggle-preview"]'),
    },
  };

  #navigationExpanded = false;
  #previewEnabled = false;

  #handleToggleNavigation = () => {
    this.#navigationExpanded = !this.#navigationExpanded;

    this.$.elements.navigation.setAttribute("data-expanded", this.#navigationExpanded);
    this.$.elements.main.setAttribute("data-pushed", this.#navigationExpanded);
  };

  #handleDeleteDocument = () => {
    this.$.elements.dialog.showModal();
  };

  #handleDialogClose = (event) => {
    if (event.target.returnValue === "confirm") {
      // TODO: delete current document
    }
  };

  #handleTogglePreview = () => {
    this.#previewEnabled = !this.#previewEnabled;

    this.$.elements.main.setAttribute("data-preview-enabled", this.#previewEnabled);
    this.$.buttons.togglePreview.setAttribute("title", this.#previewEnabled ? "Hide Preview" : "Show Preview");
    this.$.buttons.togglePreview
      .querySelector("use")
      .setAttribute(
        "href",
        this.#previewEnabled ? "./icons/symbol-defs.svg#hide-preview" : "./icons/symbol-defs.svg#show-preview"
      );
  };

  #handleInput = (event) => {
    this.$.elements.preview.content = event.target.value;
  };

  #handleKeyDown = (event) => {
    if (event.ctrlKey && event.altKey) {
      if (event.key === "d") {
        this.#handleDeleteDocument();
      }

      if (event.key === "p") {
        this.#handleTogglePreview();
      }

      if (event.key === "m") {
        this.#handleToggleNavigation();
      }

      if (event.key === "l") {
        // TODO light mode
      }

      if (event.key === "r") {
        // TODO rename
      }

      if (event.key === "s") {
        // TODO save
      }
    }
  };

  init() {
    customElements.define("document-entry", DocumentEntry);
    customElements.define("dark-mode-toggle", DarkModeToggle);
    customElements.define("html-preview", HtmlPreview);

    this.$.elements.preview.content = this.$.elements.editor.value;
  }

  registerEvents() {
    this.$.buttons.toggleNavigation.addEventListener("click", this.#handleToggleNavigation);
    this.$.buttons.toggleDeleteDialog.addEventListener("click", this.#handleDeleteDocument);
    this.$.buttons.togglePreview.addEventListener("click", this.#handleTogglePreview);
    this.$.elements.editor.addEventListener("input", this.#handleInput);
    this.$.elements.dialog.addEventListener("close", this.#handleDialogClose);

    document.addEventListener("keydown", this.#handleKeyDown);
  }
}

export default App;
