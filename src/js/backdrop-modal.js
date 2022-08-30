const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

function windowModalRemoveEventListener() {
  window.removeEventListener("keydown", closeModalEscape);
  modal.removeEventListener("click", closeModalCLickBackdrop);
}

function openModal() {
  window.addEventListener("keydown", closeModalEscape);
  modal.addEventListener("click", closeModalCLickBackdrop);
  toggleModal();
}

function closeModal() {
  toggleModal();
  windowModalRemoveEventListener();
}

function toggleModal() {
  document.body.classList.toggle("modal-open");
  modal.classList.toggle("backdrop__is-hidden");
}

function closeModalEscape(e) {
  if (e.code === "Escape") {
    toggleModal();
    windowModalRemoveEventListener();
  }
}

function closeModalCLickBackdrop(e) {
  if (e.target === e.currentTarget) {
    toggleModal();
    windowModalRemoveEventListener();
  }
}
