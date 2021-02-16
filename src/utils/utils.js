//import Card from '../components/Card.js';
//import UserInfo from '../components/UserInfo.js';
//import { deleteCardPopup, viewImagePopup, userIdInfo, editAvatarPopup, editProfilePopup, addCardPopup, cardSection, api } from '../pages/index.js';

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

/* // User info instances
export const user = new UserInfo(
  {
    name: profileName,
    about: profileJob,
    avatar: profileAvatar
  }
);

// New card instances
export const createNewCard = (data) => {
  const card = new Card(
    {
      data: data,
      handleCardClick: (name, link) => {
        viewImagePopup.open(name, link)
      },
      handleDeleteClick: (cardId, cardElement) => {
        deleteCardPopup.open(cardId, cardElement);
      },
      handleLikeClick: (cardId, cardElement) => {
        updateCardLikes(cardId, cardElement);
      }
    }, userIdInfo, '.photo-card-template'
  )
  return card.generateCard();
} */

/* // Avatar submit handler
export function submitAvatar(data) {
  editAvatarPopup.saving(true);
  api.setProfilePicture(data)
    .then((res) => {
      user.setUserInfo(res);
      editAvatarPopup.close();
    })
}

// Profile submit handler
export function submitProfileInfo(data) {
  editProfilePopup.saving(true);
  api.setUserInfo(data)
    .then((res) => {
      user.setUserInfo(res);
    })
    .catch(err => {console.log(err);})
    editProfilePopup.close();
}

// Get current profile info
export function showCurrentProfile() {
  const currentInfo = user.getUserInfo();
  nameInput.value = currentInfo.name;
  jobInput.value = currentInfo.about;
}

// New card submit handler
export function submitNewCard({ name, link }) {
  addCardPopup.saving(true);
  api.addCard({ name, link })
    .then((res) => {
      const newCard = createNewCard(res);
      cardSection.addItem(newCard);
      addCardPopup.close();
    })
    .catch(err => {console.log(err);})
} */
