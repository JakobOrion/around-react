import { useEffect, useState } from 'react';
import headerLogo from '../images/around_us_logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  // const [cardList, setCardList] = useState([])

  useEffect(() => {
    api
      .getAppInfo()
      .then(([userInfo, cardList]) => {
        setCurrentUser(userInfo);
        // setCardList(cardList)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header logo={headerLogo} />

          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />

          <Footer />
        </div>

        <PopupWithForm
          name="edit-avatar"
          title="Change profile picture"
          buttonText="Save"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            aria-label="Image URL"
            type="url"
            className="form__input form__input_type_url"
            name="avatar"
            placeholder="Image link"
            aria-required="true"
            required
          />
          <span className="form__error" aria-live="polite"></span>
        </PopupWithForm>

        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
        />

        <PopupWithForm
          name="add-card"
          title="New place"
          buttonText="Create"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            aria-label="Title"
            type="text"
            className="form__input form__input_type_card-title"
            name="name"
            placeholder="Title"
            minLength="1"
            maxLength="30"
            aria-required="true"
            required
          />
          <span className="form__error" aria-live="polite"></span>

          <input
            aria-label="Image URL"
            type="url"
            className="form__input form__input_type_url"
            name="link"
            placeholder="Image link"
            aria-required="true"
            required
          />
          <span className="form__error" aria-live="polite"></span>
        </PopupWithForm>

        <PopupWithForm
          name="delete-card"
          title="Are you sure?"
          buttonText="Yes"
        />

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
