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

  // Save the mode preference to LocalStorage
  localStorage.setItem("mode", "dark");
}

// Function that enables light theme change
function enableLightMode() {
  moon.classList.add("light-mode");
  body.classList.add("light-mode-body");
  body.classList.remove("dark-mode-body");
  body.classList.remove("modal-open");

  night.classList.remove("dark-mode");
  heading3.style.color = "black;";
  title.style.color = "black;";
  count.style.color = "black;";
  countNo.style.color = "black;";
  modal.style.backgroundColor = "white";
  modal.style.color = "black;";
  modalInput.style.backgroundColor = "white";
  modalInput.style.color = "black";
  footer.style.color = "black";

  // Save the theme preference to LocalStorage
  localStorage.setItem("mode", "light");
}

// Function Checks user's theme preference from local storage and apllies it 
function checkModePreference() {
  const currentMode = localStorage.getItem("mode");
  if (currentMode === "dark") {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

// Add event listeners to the buttons
moon.addEventListener("click", enableDarkMode);
moonLight.addEventListener("click", enableDarkMode);
night.addEventListener("click", enableLightMode);

// Check and apply users mode preference on page load
checkModePreference();

// Function that allows user to input max three words
function limitInputLength(event) {
  const input = event.target;
  const maxWords = 3;
  const inputValue = input.value.trim(); //Remove leading whitespace
  const words = inputValue.split(/\s+/);

  if (words.length > maxWords) {
    input.value = words.slice(0, maxWords)
  }
}