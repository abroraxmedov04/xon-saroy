let openMenuBtn = document.querySelector(".open-menu-btn");
let closeMenuBtn = document.querySelector(".close-menu-btn");

openMenuBtn.addEventListener("click", (e) => {
  let header = e.target.closest(".header__inner");
  let nav = header.querySelector(".header__navigation");
  if (nav.classList.contains("translate-x-full")) {
    nav.classList.remove("translate-x-full");
  }
});

closeMenuBtn.addEventListener("click", (e) => {
  let nav = e.target.closest(".header__navigation");
  if (!nav.classList.contains("translate-x-full")) {
    nav.classList.add("translate-x-full");
  }
});
