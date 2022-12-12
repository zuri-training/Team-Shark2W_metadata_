const showPassword = document.querySelector("#show-password");
const hidePassword = document.querySelector("#hide-password");
const passwordField = document.querySelector("#password");

document.getElementById("hide-password").style.display = "none";

showPassword.addEventListener("click", function () {
  document.getElementById("show-password").style.display = "none";
  document.getElementById("hide-password").style.display = "flex";
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});

hidePassword.addEventListener("click", function () {
  document.getElementById("hide-password").style.display = "none";
  document.getElementById("show-password").style.display = "flex";

  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});
