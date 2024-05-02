const ratings = document.querySelectorAll(".option");
const rateCard = document.getElementById("rateCard");
const thankCard = document.getElementById("thank");
const btn = document.getElementById("btn");

ratings.forEach((rating) => {
  rating.addEventListener("click", function () {
    ratings.forEach((rating) => {
      rating.style.backgroundColor = "hsla(216, 12%, 54%, 0.29)";
    });
    rating.style.backgroundColor = "hsl(217, 12%, 63%)";
  });
});

btn.addEventListener("click", function () {
  rateCard.classList.add("hidden");
  thankCard.classList.remove("hidden");
});
