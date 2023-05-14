const value = document.querySelector("#value");

let newValue = 0;

value.textContent = newValue;

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener("click", () => {
  newValue++;
  value.textContent = newValue;
});
decrementBtn.addEventListener("click", () => {
  newValue--;
  value.textContent = newValue;
});
