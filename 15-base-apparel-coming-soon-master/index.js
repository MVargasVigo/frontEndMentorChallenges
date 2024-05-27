const input = document.getElementById("input");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  if (!input.value) {
    alert("Please provide a valid email");
  }
});
