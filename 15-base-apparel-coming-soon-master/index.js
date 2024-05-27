const input = document.getElementById("input");
const button = document.getElementById("btn");
const message = document.getElementById("message");
const error = document.getElementById("error");

button.addEventListener("click", function () {
  console.log("click");
  const normalized = input.value.toLowerCase();
  if (!input.value) {
    emailError();
  } else if (!normalized.includes("@")) {
    emailError();
  } else if (!normalized.includes(".com")) {
    emailError();
  } else {
    error.classList.add("hidden");
    emailReceived();
  }
});

const showMessage = function () {
  message.classList.remove("hidden");
};

const emailReceived = function () {
  message.textContent = "Thank you for adding your email! We will be in touch.";
  message.style.color = "hsl(0, 36%, 70%)";
  message.style.fontWeight = "600";
  showMessage();
  input.value = "";
};

const emailError = function () {
  showMessage();
  error.classList.remove("hidden");
  input.value = "";
};
