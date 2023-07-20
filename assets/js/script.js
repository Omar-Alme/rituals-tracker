// Functions that opens notifications icon
function notifications() {
  // Add event listener for the icon
  var notificationIcon = document.getElementById("notification-icon");
  notificationIcon.addEventListener("click", function () {
    var notificationPopup = document.getElementById("notification-popup");
    notificationPopup.classList.toggle("show");
  });

  var closeIcon = document.getElementById("close-icon");
  closeIcon.addEventListener("click", function () {
    var notificationPopup = document.getElementById("notification-popup");
    notificationPopup.classList.remove("show");
  });

  // Event listeners for clicks outside the popup
  document.addEventListener("click", function (event) {
    var notificationPopup = document.getElementById("notification-popup");
    if (!notificationPopup.contains(event.target) && event.target !== notificationIcon) {
      notificationPopup.classList.remove("show");
    }
  });
}
notifications();

// Same notifictions function for light mode
var otherImage = document.getElementById("other-image");
otherImage.addEventListener("click", function () {
  var notificationPopup = document.getElementById("notification-popup1");
  notificationPopup.classList.toggle("show");
});

var closeIcon = document.getElementById("close-icon1");
closeIcon.addEventListener("click", function () {
  var notificationPopup = document.getElementById("notification-popup1");
  notificationPopup.classList.remove("show");
});

// Event listeners for clicks outside the popup
document.addEventListener("click", function (event) {
  var notificationPopup = document.getElementById("notification-popup");
  if (!notificationPopup.contains(event.target) && event.target !== notificationIcon) {
    notificationPopup.classList.remove("show");
  }
});

var formCheckInputs = document.querySelectorAll(".form-check-input");
formCheckInputs.forEach(function (input) {
  input.addEventListener("click", function () {
    this.checked = true;
    this.classList.add("checked");
  });
});

const addHabitsBtn = document.getElementById("addHabitsBtn");
const cardContainer = document.getElementById("cardContainer");
const habbitsList = document.getElementById("habbitList");

// Add event listner to add style to display modal when add habit button clicked
addHabitsBtn.addEventListener("click", function () {
  cardContainer.style.display = "none";
  habbitsList.style.display = "block";
});

// Selected List
let selectedHabitList = null;
var selectedHabits = [];

// Checks and pushes selected habits to an array
function handleRadioClick(radioButton) {
  var selectedHabit = radioButton.closest(".habit-list");

  if (radioButton.checked) {
    selectedHabits.push(selectedHabit);
    console.log(selectedHabits);
  } else {
    var index = selectedHabits.indexOf(selectedHabit);
    if (index !== -1) {
      selectedHabits.splice(index, 1);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", handleNextButtonClick);
});

// Add habits list
var habitCount = 0;
// function that closes modal when habit added
function handleNextButtonClick() {
  var habitModal = document.getElementById("habitmodal");
  habitModal.classList.remove("show");
  habitModal.style.display = "none";

  var habitListContainer = document.getElementById("habit-list-container");
  var newHabitTitle = document.getElementById("new-habit-input").value;

  for ()
}


// Changing the theme
let mode;
var moon = document.getElementById("moon");
var moonLight = document.getElementById("moon-light");
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
    input.value = words.slice(0, maxWords).join(" ");
  }

  const remainingText = words.slice(maxWords).join(" ");
  if (remainingText) {
    const cursorPosition = input.selectionStart - remainingText.length;
    input.value = input.value.slice(0, cursorPosition);
    input.setSelectionRange(cursorPosition, cursorPosition);
  }
}