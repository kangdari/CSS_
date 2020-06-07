const $header__center = document.querySelector(".header__center");
const $search_icon = document.querySelector(".search_icon");
const $back_btn = document.querySelector(".back_btn");

$search_icon.addEventListener("click", () => {
  $header__center.classList.toggle("visible");
});

$back_btn.addEventListener("click", () => {
  $header__center.classList.toggle("visible");
});
