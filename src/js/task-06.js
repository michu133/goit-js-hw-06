const textInput = document.querySelector("#validation-input");
const textDataLen = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
  if (textInput.value.length === parseInt(textDataLen)) {
    textInput.classList = "valid";
  } else if (textInput.value.length == "") {
    textInput.classList.remove("invalid");
    textInput.classList.remove("valid");
  } else {
    textInput.classList = "invalid";
  }
});
