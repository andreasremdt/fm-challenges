let form = document.querySelector("form") as HTMLFormElement;
let input = form.querySelector("input") as HTMLInputElement;

function getErrorText(input: HTMLInputElement) {
  if (input.validity.valueMissing) {
    return "Please enter an email address";
  }

  return "Check your email please";
}

function validate(input: HTMLInputElement) {
  if (!input.checkValidity() && !input.hasAttribute("aria-invalid")) {
    let error = document.createElement("p");

    error.className = "form-error";
    error.id = `${input.name}-error`;
    error.textContent = getErrorText(input);

    input.classList.add("has-error");
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", `${input.name}-error`);
    input.insertAdjacentElement("afterend", error);
  } else if (input.checkValidity() && input.hasAttribute("aria-invalid")) {
    input.classList.remove("has-error");
    input.nextElementSibling?.remove();
    input.removeAttribute("aria-invalid");
    input.removeAttribute("aria-describedby");
  }
}

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();

  validate(input);

  if (input.hasAttribute("aria-invalid")) {
    input.focus();
  } else {
    const formData = new FormData(event.target as HTMLFormElement);

    console.log("Sending email to", formData.get("email"));
  }
}

function handleBlur(event: FocusEvent) {
  let input = event.target as HTMLInputElement;

  validate(input);
}

function handleInput(event: Event) {
  let input = event.target as HTMLInputElement;

  if (input.hasAttribute("aria-invalid")) {
    validate(input);
  }
}

form.setAttribute("novalidate", "true");
form.addEventListener("submit", handleSubmit);

input.addEventListener("input", handleInput);
input.addEventListener("blur", handleBlur);
