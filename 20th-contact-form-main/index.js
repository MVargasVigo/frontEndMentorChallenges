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

//Success Message
const successMessage = document.getElementById("success");

//Errors
const allErrors = document.querySelectorAll(".error");
const firstNmErr = document.getElementById("firstNameErr");
const lastNmErr = document.getElementById("lastNameErr");
const emailErr = document.getElementById("emailErr");
const queryErr = document.getElementById("queryErr");
const messErr = document.getElementById("messErr");

//Functions
const inputChecker = function (input) {
  if (input) return true;
  else return false;
};

const allInputChecker = function (inputArray) {};

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
  allErrors.forEach((error) => {
    if (!error.classList.contains("hidden")) {
      error.classList.add("hidden");
    }
  });
  allInputs.forEach((input) => (input.value = ""));
  textArea.value = "";
  console.log(generalRadio.value);
  generalRadio.checked = false;
  supportRadio.checked = false;
  consentCheck.checked = false;
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (emailChecker(emailInput.value)) {
    success();
  } /* else if () {

  } */ else {
    allErrors.forEach((error) => error.classList.remove("hidden"));
    redBorders.forEach((border) => (border.style.borderColor = "#d73c3c"));
  }
});
