//Logos
const fbLogo = document.getElementById("facebook");
const twtLogo = document.getElementById("twitter");
const igLogo = document.getElementById("instagram");

const button = document.getElementById("send");
const input = document.querySelector("#submit input");

button.addEventListener("click", function () {
  console.log(input.value);
  if (input.value.includes("@") && input.value.includes(".com")) {
    console.log("Success!");
  } else {
    if (!input.value) {
      console.log("this field cannot be empty!");
    } else if (!input.value.includes("@") || !input.value.includes(".com"))
      console.log("this is not an email!");
  }
});
