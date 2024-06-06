//Success
const successMessage = document.getElementById("success");

const success = function () {
  console.log("Success!");
  successMessage.classList.remove("hidden");
  allInputs.forEach((input) => (input.value = ""));
  textArea.value = "";
  console.log(generalRadio.value);
  generalRadio.checked = false;
  supportRadio.checked = false;
  consentCheck.checked = false;
};

//Elements
const button = document.getElementById("btn");
const allInputs = document.querySelectorAll("input");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const textArea = document.querySelector("textArea");

//Radio Buttons and Checkbox
const generalRadio = document.getElementById("generalQ");
const supportRadio = document.getElementById("supportQ");
const consentCheck = document.getElementById("consent");

//Errors
const allErrors = document.querySelectorAll(".error");
const firstNmErr = document.getElementById("firstNameErr");
const lastNmErr = document.getElementById("lastNameErr");
const emailErr = document.getElementById("emailErr");
const queryErr = document.getElementById("queryErr");
const messErr = document.getElementById("messErr");

//Functions
const emailChecker = function (email) {
  const normalizedEmail = email.toLowerCase();
  if (normalizedEmail.includes("@") && normalizedEmail.includes(".com")) {
    return true;
  } else return false;
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (emailChecker(emailInput.value)) {
    success();
  } else {
    allErrors.forEach((error) => error.classList.remove("hidden"));
  }
});
