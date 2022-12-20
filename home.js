const showPanel = document.querySelector("#bars");
const hidePanel = document.querySelector("#cancel");
const panel = document.querySelector("#panel")
const loginButton = document.querySelector("#login");
document.getElementById("login").style.display = "none"
document.getElementById("cancel").style.display = "none";
document.getElementById("nav-list").style.display = "none";

showPanel.addEventListener("click", function () {
  document.getElementById("bars").style.display = "none";
  document.getElementById("cancel").style.display = "block";
  document.getElementById("panel").style.width = "300px";
  document.getElementById("login").style.display = "flex"
  document.getElementById("nav-list").style.display = "list-item";
  document.getElementById("nav-list").style.listStyle = "none";
  document.getElementById("panel").style.paddingRight = "50px";
})


hidePanel.addEventListener("click", function () {
  document.getElementById("cancel").style.display = "none";
  document.getElementById("bars").style.display = "block";
  document.getElementById("panel").style.width = "0";
  document.getElementById("nav-list").style.display = "none";
  document.getElementById("login").style.display = "none"
});