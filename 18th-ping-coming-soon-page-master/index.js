//Logos
const fbLogo = document.getElementById("facebook");
const twtLogo = document.getElementById("twitter");
const igLogo = document.getElementById("instagram");

const button = document.getElementById("send");
const input = document.querySelector("#submit input");
const errorMsg = document.getElementById("errorText");

const printError = function (message) {
  errorMsg.textContent = message;
  errorMsg.style.marginTop = "10px";
  errorMsg.style.marginLeft = "10px";
  errorMsg.style.color = "red";
};

button.addEventListener("click", function () {
  console.log(input.value);
  if (input.value.includes("@") && input.value.includes(".com")) {
    input.style.color = "#4f7df3";
    input.style.fontWeight = "700";
    console.log("Success!");
  } else {
    input.style.borderColor = "red";
    input.style.borderWidth = "2px";
    if (!input.value) {
      printError("This field cannot be empty!");
      console.log("this field cannot be empty!");
    } else if (!input.value.includes("@") || !input.value.includes(".com"))
      printError("This is not an email!");
    console.log("this is not an email!");
  }
});
