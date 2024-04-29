const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const openBtn = document.querySelector(btn.dataset.openTarget);
    const closeBtn = document.querySelector(btn.dataset.closeTarget);
    const answer = document.querySelector(btn.dataset.answerTarget);
    if (btn.classList.contains("active")) {
      openBtn.classList.add("hidden");
      closeBtn.classList.remove("hidden");
      answer.classList.remove("hidden");
      btn.classList.remove("active");
    } else {
      openBtn.classList.remove("hidden");
      closeBtn.classList.add("hidden");
      answer.classList.add("hidden");
      btn.classList.add("active");
    }
  });
});
