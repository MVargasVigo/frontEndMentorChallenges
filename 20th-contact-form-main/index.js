//Elements
const button = document.getElementById("btn");
const allInputs = document.querySelectorAll("input");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const textArea = document.querySelector("textArea");
const redBorders = document.querySelectorAll(".redBorder");

//Radio Buttons and Checkbox
const generalRadio = document.getElementById("generalQ");
const supportRadio = document.getElementById("supportQ");
const consentCheck = document.getElementById("consent");
const radioArray = [generalRadio, supportRadio, consentCheck];

//Success Message
const successMessage = document.getElementById("success"); //agregar transicion al mensaje de success

//Errors
const allErrors = document.querySelectorAll(".error");
const firstNmErr = document.getElementById("firstNameErr");
const lastNmErr = document.getElementById("lastNameErr");
const emailErr = document.getElementById("emailErr");
const queryErr = document.getElementById("queryErr");
const messErr = document.getElementById("messErr");

//Functions
const inputChecker = function (input) {
  if (input.value) return true;
  else return false;
};

/* const allInputChecker = function (inputArray) {
  inputArray.forEach((input) => {
    if (inputChecker(input)) return true;
    else return false;
  });
};

console.log(allInputChecker(allInputs));
 */
const radioChecker = function (radio) {
  if (radio.checked) return true;
  else return false;
};

const emailChecker = function (email) {
  const normalizedEmail = email.toLowerCase();
  if (normalizedEmail.includes("@") && normalizedEmail.includes(".com")) {
    return true;
  } else return false;
};

const success = function () {
  console.log("Success!");
  successMessage.classList.remove("hidden");
  errorHandler();
  reset();
};

const reset = function () {
  allInputs.forEach((input) => (input.value = ""));
  textArea.value = "";
  radioArray.forEach((radio) => (radio.checked = false));
};

//State?
let show = true;

const errorHandler = function () {
  if (show) {
    allErrors.forEach((error) => error.classList.remove("hidden"));
    redBorders.forEach((border) => (border.style.borderColor = "#d73c3c"));
  } else {
    allErrors.forEach((error) => error.classList.add("hidden"));
    redBorders.forEach((border) => (border.style.borderColor = "#87a3a6"));
  }
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputChecker(firstNameInput) &&
    inputChecker(lastNameInput) &&
    emailChecker(emailInput.value) &&
    inputChecker(textArea)
  ) {
    show = false;
    success();
  } /* else if () {

  } */ else {
    show = true;
    errorHandler();
  }
});
