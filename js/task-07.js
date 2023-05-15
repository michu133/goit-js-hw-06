const rangeInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

textOutput.style.fontSize = rangeInput.value + "px";

rangeInput.addEventListener("input", () => {
  textOutput.style.fontSize = rangeInput.value + "px";
});
