import type { Fields } from "./types";
import Validator from "./validator";
import { fieldRules, globalRules } from "./rules";
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

new Validator("[data-form]")
  .setFieldRules(fieldRules)
  .setGlobalRules(globalRules)
  .register()
  .on("submit", handleSubmit);
