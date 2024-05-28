//button
const button = document.getElementById("btn");

//Input Selectors
const firstInput = document.getElementById("inputFirst");
const secondInput = document.getElementById("inputSecond");
const thirdInput = document.getElementById("inputThird");
const fourthInput = document.getElementById("inputFourth");
const inputArray = document.querySelectorAll("input");

//Error Message Selectors
const firstMessage = document.getElementById("messageFirst");
const secondMessage = document.getElementById("messageSecond");
const thirdMessage = document.getElementById("messageThird");
const fourthMessage = document.getElementById("messageFourth");
const messageArray = document.querySelectorAll(".errorMessage");

//Icon Array

const iconArray = document.querySelectorAll(".errorIcon");

//Show Functions
const show = function (field) {
  field.classList.remove("hidden");
};

const showAll = function () {
  iconArray.forEach((icon) => icon.classList.remove("hidden"));
  messageArray.forEach((message) => message.classList.remove("hidden"));
};

//Hide Functions
const hide = function (field) {
  field.classList.add("hidden");
};

const hideAll = function () {
  iconArray.forEach((icon) => icon.classList.add("hidden"));
  messageArray.forEach((message) => message.classList.add("hidden"));
};

const clearInput = function () {
  inputArray.forEach((input) => (input.value = ""));
};

const normalColor = function () {
  inputArray.forEach((input) => (input.style.color = "black"));
};

button.addEventListener("click", function () {
  for (const input of inputArray) {
    const parentDiv = input.closest(".input");
    const errIcon = document.createElement("img");
    errIcon.src = "./images/icon-error.svg";
    errIcon.classList.add("errorIcon");
    const parentField = input.closest(".field");
    const errMess = document.createElement("p");
    errMess.textContent = "This field cannot be empty";
    errMess.classList.add("errorMessage");
    parentDiv.appendChild(errIcon);
    parentField.appendChild(errMess);
    if (!input.value) {
      if (errIcon.classList.contains("hidden")) {
        console.log(true);
      }
    } else {
      input.style.color = "hsl(154, 59%, 51%)";
      errIcon.classList.add("hidden");
      errMess.classList.add("hidden");
      button.textContent = "Thank you!";
    }
  }
});
