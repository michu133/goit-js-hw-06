const rangeInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

rangeInput.addEventListener("input", () => {
  textOutput.style.fontSize = rangeInput.value + "px";
});
