// header event
const $header__center = document.querySelector(".header__center");
const $search_icon = document.querySelector(".search_icon");
const $back_btn = document.querySelector(".back_btn");

$search_icon.addEventListener("click", () => {
  $header__center.classList.toggle("visible");
});

$back_btn.addEventListener("click", () => {
  $header__center.classList.toggle("visible");
});

// aside event
const $aside_btn = document.getElementsByClassName("aside__btn");
const $side__container = document.querySelector(".side__container");
const $side__background = document.querySelector(".side__background");

const side_show = () => {
  $side__container.classList.toggle("show");
  $side__background.classList.toggle("show");
};

[...$aside_btn].forEach((btn) => {
  btn.addEventListener("click", side_show);
});

$side__background.addEventListener("click", side_show);

const $expansion__btn = document.querySelector(".expansion__btn");
const $side__menu__expansion = document.querySelector(".side__menu__expansion");
const $simple__btn = document.querySelector(".simple__btn");

$expansion__btn.addEventListener("click", () => {
  $side__menu__expansion.classList.toggle("show");
  $expansion__btn.style.display = "none";
});

$simple__btn.addEventListener("click", () => {
  $side__menu__expansion.classList.toggle("show");
  $expansion__btn.style.display = "flex";
});
