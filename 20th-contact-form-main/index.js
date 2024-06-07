//Elements
const button = document.getElementById("btn");
const redBorders = document.querySelectorAll(".redBorder");

//Inputs
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");
const allInputs = [firstNameInput, lastNameInput, emailInput, message];

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
const consentErr = document.getElementById("consentErr");

//Functions
const inputChecker = function (input) {
  if (input.value) return true;
  else return false;
};

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
  hideError();
  reset();
};

const reset = function () {
  allInputs.forEach((input) => (input.value = ""));
  message.value = "";
  radioArray.forEach((radio) => (radio.checked = false));
};

const hideError = function () {
  allErrors.forEach((error) => error.classList.add("hidden"));
  allInputs.forEach((input) => input.classList.remove("redBorder"));
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  let successState;
  if (inputChecker(firstNameInput)) {
    successState = true;
    firstNameInput.classList.remove("redBorder");
    firstNmErr.classList.add("hidden");
  } else {
    firstNameInput.classList.add("redBorder");
    firstNmErr.classList.remove("hidden");
    successState = false;
  }

  if (inputChecker(lastNameInput)) {
    successState = true;
    lastNameInput.classList.remove("redBorder");
    lastNmErr.classList.add("hidden");
  } else {
    lastNameInput.classList.add("redBorder");
    lastNmErr.classList.remove("hidden");
    successState = false;
  }

  if (emailChecker(emailInput.value)) {
    successState = true;
    emailInput.classList.remove("redBorder");
    emailErr.classList.add("hidden");
  } else {
    emailInput.classList.add("redBorder");
    emailErr.classList.remove("hidden");
    successState = false;
  }

  if (radioChecker(generalRadio) || radioChecker(supportRadio)) {
    successState = true;
    queryErr.classList.add("hidden");
  } else {
    queryErr.classList.remove("hidden");
    successState = false;
  }

  if (inputChecker(message)) {
    successState = true;
    message.classList.remove("redBorder");
    messErr.classList.add("hidden");
  } else {
    message.classList.add("redBorder");
    messErr.classList.remove("hidden");
    successState = false;
  }

  if (radioChecker(consentCheck)) {
    successState = true;
    consentErr.classList.add("hidden");
  } else {
    consentErr.classList.remove("hidden");
    successState = false;
  }

  if (successState) {
    success();
  }
});
