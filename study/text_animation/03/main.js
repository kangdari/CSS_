const text = document.querySelector(".text");
const textContent = text.textContent;
const splitText = textContent.split("");
text.textContent = "";
let index = 0;

let siId = setInterval(() => {
  text.innerHTML += `<span>${splitText[index]}</span>`;
  index++;
  console.log(index);
  if (index === splitText.length) {
    clear();
    return;
  }
}, 100);

const clear = () => {
  clearInterval(siId);
  siId = null;
};
