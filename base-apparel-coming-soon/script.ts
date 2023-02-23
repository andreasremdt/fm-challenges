const form = document.querySelector("[data-form]") as HTMLFormElement;
const input = document.querySelector("[data-validate]") as HTMLInputElement;

function validate(element: HTMLInputElement): boolean {
  if (element.checkValidity()) {
    document.getElementById(`${element.name}-error`)?.remove();
    element.removeAttribute("aria-invalid");
    element.removeAttribute("aria-describedby");

    return true;
  }

  if (element.hasAttribute("aria-invalid")) {
    return false;
  }

  const error = document.createElement("p");

  error.className = "error-text";
  error.id = `${element.name}-error`;
  error.textContent = "Please provide a valid email";
  error.setAttribute("aria-live", "polite");

  element.setAttribute("aria-invalid", "true");
  element.setAttribute("aria-describedby", `${element.name}-error`);
  element.insertAdjacentElement("afterend", error);

  return false;
}

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();

  if (validate(input)) {
    const email = new FormData(event.target as HTMLFormElement).get("email");

    alert(`Your email ${email} has been registered`);
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

form.setAttribute("novalidate", "novalidate");
form.addEventListener("submit", handleSubmit);
input.addEventListener("blur", handleBlur);
input.addEventListener("input", handleInput);
