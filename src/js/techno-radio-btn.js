const radioBtns = document.querySelectorAll('[name="radio-btn"]');
const radioContent = document.querySelectorAll(".techno-bottom");

function contentShow(index) {
  console.log(index);
  radioContent.forEach((content, contentIndex) => {
    console.log(content);

    if (index === contentIndex) {
      content.classList.add("is-visible");
    } else {
      content.classList.remove("is-visible");
    }
  });
}

radioBtns.forEach((radioBtn, index) => {
  radioBtn.addEventListener("change", () => {
    console.log(radioBtn);
    contentShow(index);
  });
});
