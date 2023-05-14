function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
let bgColor;

colorButton.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  bgColor = window
    .getComputedStyle(document.body, null)
    .getPropertyValue("background-color");
  spanColor.textContent = bgColor;
});
