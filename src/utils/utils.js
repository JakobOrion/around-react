// Default settings
export const defaultConfig = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible',
};

// Forms
export const allForms = [...document.querySelectorAll('.popup__form')];

// Profile elements
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileName = document.querySelector('.profile__name-text');
export const profileJob = document.querySelector('.profile__description');

// Profile form inputs
export const nameInput = document.querySelector('.form__input_type_name');
export const jobInput = document.querySelector('.form__input_type_description');