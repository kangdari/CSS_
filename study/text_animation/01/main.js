"use strict";
const text = document.querySelector(".text");
const textContent = text.textContent;
const textSplit = textContent.split("");
text.textContent = "";
let index = 0;

for (let char of textSplit) {
  text.innerHTML += `<span>${char}</span>`;
}

console.log(text);

// 함수 표현식은 호이스팅 안됨.
const onShow = () => {
  const span = document.querySelectorAll("span")[index];
  span.classList.add("fade");
  index++;
  if (index === textSplit.length) {
    clearInterval(siID);
    siID = null;
    return;
  }
};
// 50ms 마다 글자하나에 fade 클래스 추가
let siID = setInterval(onShow, 60);
