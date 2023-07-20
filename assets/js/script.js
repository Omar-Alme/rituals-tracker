// Changing the theme
let mode;
var moon = document.getElementById("moon");
var moonLight = document.getElementById("moonLight");
var night = document.getElementById("night");
var navbar = document.querySelector(".navbar");
var heading3 = navbar.querySelector("h3");
var title = document.querySelector(".card-body .card-title");
var body = document.querySelector("body");
var count = document.querySelector(".count");
var countNo = document.querySelector(".count span");
var card = document.getElementsByClassName("habbit-card");
var modal = document.querySelector(".modal-content");
var modalInput = document.querySelector(".new-habit-input");
var footer = document.querySelector(".footer-section");

// Function that enables dark theme change
function enableDarkMode() {
  moon.classList.add("dark-mode");
  body.classList.add("dark-mode-body");
  body.classList.remove("light-mode-body");
  body.classList.remove("modal-open");

  night.classList.remove("light-mode");
  heading3.style.color = "white;";
  title.style.color = "white;";
  count.style.color = "white;";
  countNo.style.color = "white;";
  modal.style.backgroundColor = "#1f2129;";
  modal.style.color = "white;";
  modalInput.style.backgroundColor = "#10121a;";
  modalInput.style.color = "white;";
  footer.style.color = "white";








}