const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const openBtn = document.querySelector(btn.dataset.openTarget);
    const closeBtn = document.querySelector(btn.dataset.closeTarget);
    const answer = document.querySelector(btn.dataset.answerTarget);
    openBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
    answer.classList.remove("hidden");
  });
});
