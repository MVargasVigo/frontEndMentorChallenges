//button
const button = document.getElementById("btn");

//Input Selectors
const firstInput = document.getElementById("inputFirst");
const secondInput = document.getElementById("inputSecond");
const thirdInput = document.getElementById("inputThird");
const fourthInput = document.getElementById("inputFourth");
const inputArray = document.querySelectorAll("input");

//Error Icon Selectors
const firstIcon = document.getElementById("iconFirst");
const secondIcon = document.getElementById("iconSecond");
const thirdIcon = document.getElementById("iconThird");
const fourthIcon = document.getElementById("iconFourth");
const iconArray = document.querySelectorAll(".errorIcon");

//Error Message Selectors
const firstMessage = document.getElementById("messageFirst");
const secondMessage = document.getElementById("messageSecond");
const thirdMessage = document.getElementById("messageThird");
const fourthMessage = document.getElementById("messageFourth");
const messageArray = document.querySelectorAll(".errorMessage");

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

const clearInput = function () {
  inputArray.forEach((input) => (input.value = ""));
};

const complete = function () {
  iconArray.forEach((icon) => icon.classList.add("hidden"));
  messageArray.forEach((message) => message.classList.add("hidden"));
  button.textContent = "Thank you!";
};

button.addEventListener("click", function () {
  if (
    !firstInput.value &&
    !secondInput.value &&
    !thirdInput.value &&
    !fourthInput.value
  ) {
    showAll();
  } else {
    clearInput();
    complete();
  }
  /* if (
    firstInput.value &&
    secondInput.value &&
    thirdInput.value &&
    fourthInput.value
  ) {
    console.log(
      firstInput.value,
      secondInput.value,
      thirdInput.value,
      fourthInput.value
    );
    showAll();
  } else {
    console.log(
      firstInput.value,
      secondInput.value,
      thirdInput.value,
      fourthInput.value
    );
    if (
      firstInput.value &&
      secondInput.value &&
      thirdInput.value &&
      fourthInput.value
    ) {
      button.textContent = "Thank you!";
    }
  } */
});
