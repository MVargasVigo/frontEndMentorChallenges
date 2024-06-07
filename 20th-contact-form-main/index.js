//Elements
const button = document.getElementById("btn");
const redBorders = document.querySelectorAll(".redBorder");

//Inputs
const allInputs = document.querySelectorAll("input");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

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

/* const allInputChecker = function (inputArray) {
  inputArray.forEach((input) => {
    if (inputChecker(input)) return true;
    else return false;
  });
};

ALGO QUE SE PODRIA HACER ES NOMBRAR DINAMICAMENTE A LOS ERRORES, COSA QUE SI SE VERIFICA MEDIANTE UN CHECKER DE ARRAY QUE UN ELEMENTO NO ES VERDADERO, TODOS LOS ELEMENTOS FALSOS SE AÑADEN A OTRO ARRAY. ESTE OTRO ARRAY SE LE PODRIA HACER UN FOR EACH EN EL QUE A CADA UNO SE LE SELECCIONA CON DOCUMENT.GETELEMENTBYID Y EN EL PARÉNTESIS SE ESPECÍFICA EL NOMBRE DEL INPUT Y EL ERROR QUE SE DEBE MOSTRAR. POR EJEMPLO ERROR-${INPUT} Y EL INPUT PUEDE SER MESSAGE 

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
  hideError();
  reset();
};

const reset = function () {
  allInputs.forEach((input) => (input.value = ""));
  message.value = "";
  radioArray.forEach((radio) => (radio.checked = false));
};

const hideError = function () {
  allErrors.forEach((error) => error.classList.toggle("hidden redBorder"));
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  let successState;
  console.log(firstNameInput.value);
  console.log(emailChecker(emailInput.value));
  if (inputChecker(firstNameInput)) {
    successState = true;
  } else {
    firstNameInput.classList.add("redBorder");
    firstNmErr.classList.remove("hidden");
    successState = false;
  }

  if (lastNameInput.value) {
    lastNmErr.classList.toggle("hidden");
    successState = false;
  } else successState = true;

  if (emailChecker(emailInput.value)) {
    successState = true;
  } else {
    emailErr.classList.toggle("hidden");
    successState = false;
  }

  if (radioChecker(generalRadio) || radioChecker(supportRadio)) {
    successState = true;
  } else {
    queryErr.classList.toggle("hidden");
    successState = false;
  }

  if ((message.value = "")) {
    messErr.classList.toggle("hidden");
    successState = false;
  } else successState = true;

  if (radioChecker(consentCheck)) {
    successState = true;
  } else {
    consentErr.classList.toggle("hidden");
    successState = false;
  }

  if (successState) {
    success();
  }
});
