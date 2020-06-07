// header event
const $header__center = document.querySelector(".header__center");
const $search__box = document.querySelector(".search__box");
const $back_btn = document.querySelector(".back_btn");

$search__box.addEventListener("click", () => {
  $header__center.classList.toggle("visible");
});

$back_btn.addEventListener("click", () => {
  $header__center.classList.toggle("visible");
});

// aside event
const $aside_btn = document.getElementsByClassName("aside__btn");
const $side__container = document.querySelector(".side__container");
const $side__background = document.querySelector(".side__background");

// side open or close
const side_show = () => {
  $side__container.classList.toggle("show");
  $side__background.classList.toggle("show");
};

[...$aside_btn].forEach((btn) => {
  btn.addEventListener("click", side_show);
});

$side__background.addEventListener("click", side_show);

// 더 보기
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

//  구독 더보기
const $sub__expansion__btn = document.querySelector('.sub__expansion__btn');
const $sub__side__menu__expansion = document.querySelector('.sub__side__menu__expansion');
const $sub__simple__btn = document.querySelector('.sub__simple__btn');

$sub__expansion__btn.addEventListener("click", () => {
  $sub__side__menu__expansion.classList.toggle("show");
  $sub__expansion__btn.style.display = "none";
});

$sub__simple__btn.addEventListener("click", () => {
  $sub__side__menu__expansion.classList.toggle("show");
  $sub__expansion__btn.style.display = "flex";
});