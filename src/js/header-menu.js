const headerMenuBtn = document.querySelector("[data-menu-btn]");
const headerMenu = document.querySelector("[data-menu]");

headerMenuBtn.addEventListener("click", () => {
  headerMenuBtn.classList.toggle("header-menu-btn__is-open");
  headerMenu.classList.toggle("header-menu__is-open");
  document.body.classList.toggle("header-menu-open");
});
