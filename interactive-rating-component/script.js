const form = document.querySelector("[data-form]");
const template = document.querySelector("[data-template]");
const wrapper = document.querySelector("[data-wrapper]");

function handleSubmit(event) {
  event.preventDefault();

  const rating = new FormData(event.target).get("rating");

  if (rating) {
    playAudio();
    swipe(rating);
  }
}

function swipe(rating) {
  wrapper.addEventListener(
    "animationend",
    () => {
      wrapper.style.height = wrapper.offsetHeight + "px";
      wrapper.innerHTML = template.innerHTML.replace(/{{ result }}/g, rating);
      wrapper.classList.replace("animate-out", "animate-in");
    },
    { once: true }
  );
  wrapper.classList.add("animate-out");
}

function playAudio() {
  const audio = new Audio("./sounds/whoosh.mp3");

  audio.volume = 0.2;
  audio.play();
}

form.addEventListener("submit", handleSubmit);
