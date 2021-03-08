let PASSWORD = "password";
let PASSWORDLIST = []

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".pw-submit");
  const passwordInput = document.querySelector(".pw-main-input");
  passwordInput.addEventListener("change", handlePasswordInput);
  btn.addEventListener("click", handleSubmit);
});

const handlePasswordInput = (event) => {
  const inputPassword = document.querySelector(".pw-main-input");
  inputPassword.value = event.target.value;
};

const handleSubmit = () => {
  const inputPassword = document.querySelector(".pw-main-input").value;
  if (inputPassword === PASSWORD) {
    console.log("success");
    window.location.href = 'manager.html'
  } else {
    const msg = document.querySelector(".pw-wrong-statement");
    if (msg) return;
    const container = document.querySelector(".pw-container");
    const error = document.createElement("p");
    error.style.color = "red";
    error.setAttribute("class", "pw-wrong-statement");
    error.innerText = "Wrong password! Please try again";
    container.insertBefore(error, container[1]);
  }
};
