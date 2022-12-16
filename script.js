// NAVIGATION BAR/PANEL
const showPanel = document.querySelector("#bars");
const hidePanel = document.querySelector("#cancel");
const panel = document.querySelector("#panel");
document.getElementById("cancel").style.display = "none";
document.getElementById("nav-list").style.display = "none"

showPanel.addEventListener("click", function () {
  document.getElementById("bars").style.display = "none";
  document.getElementById("cancel").style.display = "block"
  document.getElementById("panel").style.width = "300px"
  document.getElementById("nav-list").style.display = "list-item"
  document.getElementById("nav-list").style.listStyle = "none";
  document.getElementById("panel").style.paddingRight = "50px"
})

hidePanel.addEventListener("click", function () {
  document.getElementById("cancel").style.display = "none";
  document.getElementById("bars").style.display = "block";
  document.getElementById("panel").style.width = "0";
  document.getElementById("nav-list").style.display = "none";
})



// SHOW/HIDE PASSWORD
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
