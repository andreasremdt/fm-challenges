function close(details: HTMLDetailsElement) {
  details.style.setProperty("--height", details.getAttribute("data-collapsed-height"));

  details.addEventListener(
    "transitionend",
    () => {
      details.removeAttribute("data-collapsed-height");
      details.removeAttribute("style");
    },
    { once: true }
  );
}

function open(details: HTMLDetailsElement) {
  details.setAttribute("data-collapsed-height", details.scrollHeight + "px");
  details.style.setProperty("--height", details.scrollHeight + "px");

  requestAnimationFrame(() => {
    details.style.setProperty("--height", details.scrollHeight + "px");
  });
}

function handleClick(event: MouseEvent) {
  if ((event.target as HTMLElement).matches("summary")) {
    let details = (event.target as HTMLElement).closest("details");

    if (details) {
      details.hasAttribute("open") ? close(details) : open(details);
    }
  }
}

document.addEventListener("click", handleClick);

document.querySelectorAll<HTMLDetailsElement>("details[open]").forEach((detail) => {
  let summary = detail.querySelector<HTMLDivElement>("summary");

  if (summary) {
    detail.setAttribute("data-collapsed-height", summary.scrollHeight + "px");
    detail.style.setProperty("--height", detail.scrollHeight + "px");
  }
});
