import type { Fields } from "./types";
import Validator from "./validator";
import rules from "./rules";
import { getDateDiff, animate } from "./utils";

function handleSubmit(formData: FormData) {
  let paragraphs = document.querySelectorAll("[data-result]") as NodeListOf<HTMLParagraphElement>;
  let difference = getDateDiff(`${formData.get("year")}-${formData.get("month")}-${formData.get("day")}`);

  paragraphs.forEach((paragraph) => {
    if (paragraph.firstElementChild && paragraph.dataset.result) {
      let value = difference[paragraph.dataset.result as Fields];

      animate(paragraph.firstElementChild, value);
    }
  });
}

function handleValidation(formData: FormData) {
  let day = Number(formData.get("day"));
  let month = Number(formData.get("month"));
  let year = Number(formData.get("year"));

  if (isNaN(Date.parse(`${year}-${month}-${day}`))) {
    return "Must be a valid date";
  }
}

new Validator("[data-form]").rules(rules).on("submit", handleSubmit).on("validate", handleValidation).register();
