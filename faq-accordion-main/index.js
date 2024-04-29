const q1 = document.querySelector("#q1");
const c1 = document.querySelector("#c1");
const q2 = document.querySelector("#q2");
const q3 = document.querySelector("#q3");
const q4 = document.querySelector("#q4");
const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
const a4 = document.querySelector("#a4");
const closeBtns = document.querySelectorAll(".closeBtn");

q1.addEventListener("click", function () {
  this.classList.add("hidden");
  c1.classList.remove("hidden");
  a1.classList.remove("hidden");
});

q2.addEventListener("click", function () {
  this.classList.add("closeBtn");
  a2.classList.remove("hidden");
});

q3.addEventListener("click", function () {
  this.classList.add("closeBtn");
  a3.classList.remove("hidden");
});

q4.addEventListener("click", function () {
  this.classList.add("closeBtn");
  a4.classList.remove("hidden");
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("pressed");
    this.innerHtml = svgPlus;
    this.classList.remove("closeBtn");
  });
});
