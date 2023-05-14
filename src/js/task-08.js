const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Uzupełnij wszystkie pola!");
    return;
  }
  console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
