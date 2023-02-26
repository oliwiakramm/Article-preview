const shareBtn = document.querySelector(".share__btn");
const shareContainer = document.querySelector(".share__container");

shareBtn.addEventListener("click", () => {
  shareContainer.classList.toggle("open");
});
