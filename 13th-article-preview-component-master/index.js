const shareBtn = document.getElementById("btn");
const shareImg = document.getElementById("shareBtn");
const shareModal = document.getElementById("shareOptions");

shareBtn.addEventListener("click", function () {
  this.style.backgroundColor = "hsl(217, 19%, 35%)";
  this.style.color = "white";
  shareModal.classList.remove("hidden");
});
