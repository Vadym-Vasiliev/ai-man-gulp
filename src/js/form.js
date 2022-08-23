let form = document.querySelector(".modal-form");
let formInputs = document.querySelectorAll(".modal-form__input");
let inputEmail = document.querySelector(".modal-form__input-email");
let inputPhone = document.querySelector(".modal-form__input-phone ");

//перевірка на цифри
function validatePhone(phone) {
  let symbols = /^[0-9\s]*$/;
  return symbols.test(String(phone));
}

//перевірка емейла
function validateEmail(email) {
  let symbols =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return symbols.test(String(email).toLowerCase());
}

//провірка на домєн
function validateCountry(country) {
  let symbols = new RegExp(".co$");
  return symbols.test(String(country).toLowerCase());
}

//перевірка на пусті  поля
form.onsubmit = function () {
  let phoneValue = inputPhone.value;
  let emailValue = inputEmail.value;

  //вертає ретюрн фолс якщо інпути пусті
  let emptyInputs = Array.from(formInputs).filter(
    (input) => input.value === ""
  );

  formInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  if (emptyInputs.length !== 0) {
    console.log("Поля не заповнені!");
    return false;
  }

  if (!validatePhone(phoneValue)) {
    console.log("Поле телефона не заповнено!");
    inputPhone.classList.add("error");
    return false;
  } else {
    inputPhone.classList.remove("error");
  }

  if (!validateEmail(emailValue)) {
    console.log("Поле пошти не заповнено!");
    inputEmail.classList.add("error");
    return false;
  } else {
    inputEmail.classList.remove("error");
  }

  if (validateCountry(emailValue)) {
    console.log("Пошта Колумбійська!)");
    inputEmail.classList.add("error");
    return false;
  } else {
    inputEmail.classList.remove("error");
  }
};
