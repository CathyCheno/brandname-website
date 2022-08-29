// select button and links
const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav-links");

// add EventListener
navToggle.addEventListener("click", () => {
  nav.classList.toggle('nav-open');
})

// scroll to top
function scrollToTop() {
  window.scrollTo(0, 0);
}