const text = document.querySelector(".text");
const textContent = text.textContent;
const splitText = textContent.split("");
text.textContent = "";

for (let char of splitText) {
  text.innerHTML += `<span>${char}</span>`;
}
