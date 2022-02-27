"use strict";

(function () {
  const button = document.querySelector('[data-action="refresh"]');
  const adviceId = document.querySelector('[data-bind="advice-id"]');
  const quote = document.querySelector('[data-bind="quote"]');

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const ANIMATION_TIMEOUT = prefersReducedMotion.matches ? 0 : 600;

  function animateIn() {
    quote.classList.replace("slide-out-x", "slide-in-x");
    adviceId.classList.replace("slide-out-y", "slide-in-y");

    setTimeout(() => {
      quote.classList.remove("slide-in-x");
      adviceId.classList.remove("slide-in-y");
    }, ANIMATION_TIMEOUT);
  }

  function animateOut() {
    return new Promise((resolve) => {
      quote.classList.add("slide-out-x");
      adviceId.classList.add("slide-out-y");
      button.classList.add("spin");

      setTimeout(() => {
        resolve();
        button.classList.remove("spin");
      }, ANIMATION_TIMEOUT);
    });
  }

  function setNewAdvice({ id, advice }) {
    adviceId.textContent = id;
    quote.textContent = advice;

    animateIn();
  }

  function displayErrorMessage(errorText) {
    quote.textContent = errorText;
    quote.classList.add("has-error");
    animateIn();
  }

  function hideErrorMessage() {
    quote.classList.remove("has-error");
  }

  async function fetchAdvice() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice", {
        cache: "reload", // Needed for Firefox, otherwise only cached responses are returned
      });

      if (response.ok) {
        const json = await response.json();

        hideErrorMessage();
        setNewAdvice(json.slip);
      } else {
        throw new Error(
          `Could not fetch advice (${response.status} - ${response.statusText}). Please try again later.`
        );
      }
    } catch (ex) {
      displayErrorMessage(ex.message);
    }
  }

  function handleClick() {
    animateOut().then(fetchAdvice);
  }

  button.addEventListener("click", handleClick);

  // Initially fetch the first advice and display it.
  fetchAdvice();
})();
