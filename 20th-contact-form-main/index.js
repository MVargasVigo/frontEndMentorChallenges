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
const textArea = document.querySelector("textArea");
const generalRadio = document.getElementById("generalQ");
const supportRadio = document.getElementById("supportQ");
const consentCheck = document.getElementById("consent");

button.addEventListener("click", function (e) {
  e.preventDefault();
  success();
});
