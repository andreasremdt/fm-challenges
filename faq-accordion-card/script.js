const summaries = document.querySelectorAll("summary");

function handleClick(event) {
  const details = event.target.parentNode;

  if (details.hasAttribute("open")) {
    details.style.setProperty("--height", details.getAttribute("data-collapsed-height") + "px");

    details.addEventListener(
      "transitionend",
      () => {
        details.removeAttribute("data-collapsed-height");
        details.removeAttribute("style");
      },
      { once: true }
    );
  } else {
    details.setAttribute("data-collapsed-height", details.scrollHeight);
    details.style.setProperty("--height", details.scrollHeight + "px");

    requestAnimationFrame(() => {
      details.style.setProperty("--height", details.scrollHeight + "px");
    });
  }
}

for (const summary of summaries) {
  summary.addEventListener("click", handleClick);
}
