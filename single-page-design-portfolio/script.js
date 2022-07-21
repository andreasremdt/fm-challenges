const BUTTON_CONTROL = "data-slider-control";

const slider = new Flickity(document.querySelector("[data-slider]"), {
  cellAlign: "center",
  contain: true,
  wrapAround: true,
  pageDots: false,
  prevNextButtons: false,
});

function handleClick({ target }) {
  if (target.hasAttribute(BUTTON_CONTROL)) {
    if (target.getAttribute(BUTTON_CONTROL) === "next") {
      slider.next();
    } else if (target.getAttribute(BUTTON_CONTROL) === "prev") {
      slider.previous();
    }
  }
}

document.addEventListener("click", handleClick);
