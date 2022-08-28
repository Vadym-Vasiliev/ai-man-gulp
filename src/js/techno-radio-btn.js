const radioButtons = document.querySelectorAll("[name='radio-btn']");
const radioContents = document.querySelectorAll(".techno-bottom");

function contentShow(indexButton) {
  radioContents.forEach((radioContent, indexContent) => {
    if (indexButton === indexContent) {
      radioContent.classList.add("is-visible");
    } else {
      radioContent.classList.remove("is-visible");
    }
  });
}

radioButtons.forEach((radioButton, indexButton) => {
  radioButton.addEventListener("change", () => {
    contentShow(indexButton);
  });
});
