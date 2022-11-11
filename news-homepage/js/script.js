document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector('[data-action="toggle-navigation"]');
  const navigation = document.querySelector('[data-target="navigation"]');
  const links = navigation.querySelectorAll("a");
  const mediaQuery = window.matchMedia("(max-width: 40rem)");
  const firstLink = links[0];
  const lastLink = links[links.length - 1];

  let menuVisible = false;

  function toggleMenu() {
    menuVisible = !menuVisible;

    navigation.classList.toggle("is-open");
    navigation.setAttribute("aria-hidden", !menuVisible);
    toggle.classList.toggle("has-open-menu");
    toggle.setAttribute("aria-label", `${menuVisible ? "Close" : "Open"} mobile navigation`);
    toggle.setAttribute("aria-expanded", menuVisible);
    links.forEach((link) => link.setAttribute("tabindex", menuVisible ? "0" : "-1"));

    if (menuVisible) {
      firstLink.focus();
    } else {
      toggle.focus();
    }
  }

  function handleMenuClick(event) {
    if (event.target === navigation && menuVisible) {
      toggleMenu();
    }
  }

  function focusTrab(event) {
    if (event.shiftKey) {
      if (document.activeElement === toggle) {
        event.preventDefault();
        lastLink.focus();
      }
    } else if (document.activeElement === lastLink) {
      event.preventDefault();
      toggle.focus();
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Escape" && menuVisible) {
      toggleMenu();
    }

    if (event.key === "Tab" && menuVisible) {
      focusTrab(event);
    }
  }

  function handleMediaChange(event) {
    if (event.matches) {
      toggle.setAttribute("aria-expanded", menuVisible);
      links.forEach((link) => link.setAttribute("tabindex", menuVisible ? "0" : "-1"));
    } else {
      links.forEach((link) => link.setAttribute("tabindex", "0"));
    }
  }

  document.addEventListener("keydown", handleKeyDown);
  toggle.addEventListener("click", toggleMenu);
  navigation.addEventListener("click", handleMenuClick);
  mediaQuery.addEventListener("change", handleMediaChange);

  handleMediaChange(mediaQuery);
});
