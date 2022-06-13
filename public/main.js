const header = document.querySelector(".header");
const nav = document.querySelector(".header--nav");
const navOpenBtn = document.querySelector(".header--btn");
const navCloseBtn = document.querySelector(".header .uil-times");

// Scroll
window.addEventListener("scroll", () => {
  header.classList.toggle("on-scroll", window.scrollY > 0);
});

// Nav

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("open--nav");
});

navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("open--nav");
});
