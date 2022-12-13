const showPassword = document.querySelector("#show-password");
const hidePassword = document.querySelector("#hide-password");
const confirmShowPassword = document.querySelector("#confirm-show-password");
const confirmHidePassword = document.querySelector("#confirm-hide-password");
const passwordField = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

document.getElementById("hide-password").style.display = "none";
document.getElementById("confirm-hide-password").style.display = "none";

showPassword.addEventListener("click", function () {
  document.getElementById("show-password").style.display = "none";
  document.getElementById("hide-password").style.display = "block";
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});

hidePassword.addEventListener("click", function () {
  document.getElementById("hide-password").style.display = "none";
  document.getElementById("show-password").style.display = "block";

  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});


// FOR CONFIRM PASSWORD INPUT

confirmShowPassword.addEventListener("click", function () {
  document.getElementById("confirm-show-password").style.display = "none";
  document.getElementById("confirm-hide-password").style.display = "block";

  const type =
    confirmPassword.getAttribute("type") === "password" ? "text" : "password";
  confirmPassword.setAttribute("type", type);
});

confirmHidePassword.addEventListener("click", function () {
  document.getElementById("confirm-hide-password").style.display = "none";
  document.getElementById("confirm-show-password").style.display = "block";

  const type =
    confirmPassword.getAttribute("type") === "password" ? "text" : "password";
  confirmPassword.setAttribute("type", type);
});
