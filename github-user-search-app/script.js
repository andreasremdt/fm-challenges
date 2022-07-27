const input = document.querySelector("[data-input]");
const form = document.querySelector("[data-form]");
const elements = document.querySelectorAll("[data-field]");
const darkModeToggle = document.querySelector("[data-dark-mode-toggle]");
const iconMoon = document.querySelector("[data-dark-mode]");
const iconSun = document.querySelector("[data-light-mode]");
const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

const DARK_MODE_KEY = "dark_mode_enabled";
const DEFAULT_QUERY = "octocat";
const NO_CONTENT = ["Not available", "This profile has no bio"];

async function getGitHubUser(username) {
  try {
    if (!username) {
      throw new Error("No username given");
    }

    const response = await fetch(`https://api.github.com/users/${username}`);

    if (response.ok) {
      const json = await response.json();

      handleSuccess(prepareUser(json));
    } else {
      throw new Error("No results");
    }
  } catch (error) {
    handleError(error.message);
  }
}

async function handleSubmit(event) {
  event.preventDefault();

  const [input] = event.target.elements;

  clearError();
  getGitHubUser(input.value);
}

function prepareUser(user) {
  if (!user.bio) {
    user.bio = "This profile has no bio";
  }

  if (!user.company) {
    user.company = "Not available";
  }

  if (!user.twitter_username) {
    user.twitter_username = "Not available";
  }

  if (!user.location) {
    user.location = "Not available";
  }

  if (!user.blog) {
    user.blog = "Not available";
  }

  user.login = `@${user.login}`;

  user.created_at = `Joined ${new Intl.DateTimeFormat("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(user.created_at))}`;

  return user;
}

function handleError(text) {
  const error = document.createElement("p");

  error.textContent = text;
  error.id = "form-error";
  error.className = "text-red font-bold absolute right-0 top-4 sm:top-0 mt-[2px]";

  input.setAttribute("aria-invalid", "true");
  input.setAttribute("aria-describedby", "form-error");

  input.after(error);
}

function clearError() {
  const error = document.getElementById("form-error");

  if (error) {
    form.removeChild(error);
  }

  input.setAttribute("aria-invalid", "false");
  input.removeAttribute("aria-describedby");
}

function handleSuccess(user) {
  for (const element of elements) {
    if (user.hasOwnProperty(element.dataset.field)) {
      if (element.dataset.attr) {
        const attributes = element.dataset.attr.split(",");

        for (const attribute of attributes) {
          element[attribute] = user[element.dataset.field];
        }
      } else {
        element.textContent = user[element.dataset.field];
      }

      if (user[element.dataset.field] === "Not available") {
        element.classList.add("opacity-60");
        element.previousElementSibling.classList.add("opacity-60");
      } else if (element.classList.contains("opacity-60")) {
        element.classList.remove("opacity-60");
        element.previousElementSibling.classList.remove("opacity-60");
      }

      if (element.dataset.field === "bio") {
        if (user[element.dataset.field] === "This profile has no bio") {
          element.classList.add("opacity-60");
        } else {
          element.classList.remove("opacity-60");
        }
      }
    }
  }
}

function enableDarkMode() {
  document.documentElement.classList.add("dark");

  darkModeToggle.firstElementChild.textContent = "Light";
  iconMoon.classList.add("hidden");
  iconSun.classList.remove("hidden");
}

function disableDarkMode() {
  document.documentElement.classList.remove("dark");

  darkModeToggle.firstElementChild.textContent = "Dark";
  iconMoon.classList.remove("hidden");
  iconSun.classList.add("hidden");
}

function handleToggleDarkMode() {
  if (document.documentElement.classList.contains("dark")) {
    disableDarkMode();

    localStorage.setItem(DARK_MODE_KEY, "0");
  } else {
    enableDarkMode();

    localStorage.setItem(DARK_MODE_KEY, "1");
  }
}

function handleColorSchemeChange(event) {
  if (!localStorage.getItem(DARK_MODE_KEY)) {
    if (event.matches) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }
}

function init() {
  if (
    localStorage.getItem(DARK_MODE_KEY) === "1" ||
    (localStorage.getItem(DARK_MODE_KEY) !== "0" && colorScheme.matches)
  ) {
    enableDarkMode();
  }

  getGitHubUser(DEFAULT_QUERY);
}

form.addEventListener("submit", handleSubmit);
darkModeToggle.addEventListener("click", handleToggleDarkMode);
colorScheme.addEventListener("change", handleColorSchemeChange);
document.addEventListener("DOMContentLoaded", init);
