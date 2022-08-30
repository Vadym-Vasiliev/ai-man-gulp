const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

function windowModalRemoveEventListener() {
  window.removeEventListener("keydown", closeModalEscape);
  modal.removeEventListener("click", closeModalClickBackdrop);
}

function openModal() {
  window.addEventListener("keydown", closeModalEscape);
  modal.addEventListener("click", closeModalClickBackdrop);
  toggleModal();
}

function closeModal() {
  toggleModal();
  windowModalRemoveEventListener();
}

function toggleModal() {
  modal.classList.toggle("backdrop__is-hidden");
  document.body.classList.toggle("modal-open");
}

function closeModalEscape(e) {
  if (e.code === "Escape") {
    toggleModal();
    windowModalRemoveEventListener();
  }
}

function closeModalClickBackdrop(e) {
  if (e.target === e.currentTarget) {
    toggleModal();
    windowModalRemoveEventListener();
  }
}
