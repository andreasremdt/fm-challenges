const form = document.querySelector("[data-form]") as HTMLFormElement;
const input = document.querySelector("[data-validate]") as HTMLInputElement;
const errorContainer = document.querySelector("[data-error-content]") as HTMLDivElement;
const template = document.querySelector("[data-template]") as HTMLTemplateElement;
const main = document.querySelector("[data-main]") as HTMLDivElement;

function validate(element: HTMLInputElement) {
  if (element.checkValidity()) {
    document.getElementById(`${element.name}-error`)?.remove();
    element.removeAttribute("aria-invalid");
    element.removeAttribute("aria-describedby");

    return true;
  }

  if (element.hasAttribute("aria-invalid")) {
    return false;
  }

  const error = document.createElement("span");

  error.id = `${element.name}-error`;
  error.textContent = "Oops, wrong format";
  error.setAttribute("aria-live", "polite");

  element.setAttribute("aria-invalid", "true");
  element.setAttribute("aria-describedby", `${element.name}-error`);
  errorContainer.append(error);

  return false;
}

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();

  if (validate(input)) {
    const email = new FormData(event.target as HTMLFormElement).get("email");

    main.classList.add("done");
    main.innerHTML = template.innerHTML.replace(/{{ email }}/, email as string);
  }
}

function handleBlur(event: FocusEvent) {
  validate(event.target as HTMLInputElement);
}

function handleInput(event: Event) {
  const input = event.target as HTMLInputElement;

  if (input.hasAttribute("aria-invalid")) {
    validate(input as HTMLInputElement);
  }
}

function handleClick(event: MouseEvent) {
  if ((event.target as HTMLElement).hasAttribute("data-reload")) {
    location.reload();
  }
}

form.setAttribute("novalidate", "novalidate");
form.addEventListener("submit", handleSubmit);
input.addEventListener("blur", handleBlur);
input.addEventListener("input", handleInput);
main.addEventListener("click", handleClick);
