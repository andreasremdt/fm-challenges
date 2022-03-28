"use strict";

function hideError(input) {
  if (input.nextElementSibling) {
    input.nextElementSibling.remove();
    input.removeAttribute("aria-invalid");
    input.classList.remove("has-error");
  }
}

function showError(input) {
  if (!input.nextElementSibling) {
    const error = document.createElement("p");

    error.textContent = "Please provide a valid email address";
    error.className = "error";
    error.setAttribute("aria-describedby", input.id);

    input.classList.add("has-error");
    input.setAttribute("aria-invalid", "true");
    input.parentNode.append(error);
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const [input] = event.target.elements;

  if (input.validity.valid) {
    hideError(input);
    alert("Thank you for subscribing!");
  } else {
    showError(input);
  }
}

function handleInput(event) {
  if (event.target.validity.valid && event.target.hasAttribute("aria-invalid")) {
    hideError(event.target);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const [form] = document.forms;
  const [input] = form.elements;

  form.setAttribute("novalidate", "true");
  form.addEventListener("submit", handleSubmit);
  input.addEventListener("input", handleInput);
});
