import { useState } from 'react'
import headerLogo from '../images/around_us_logo.svg'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopup] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopup] = useState(false)
  const [isImagePopupOpen, setImagePopup] = useState(false)
  const [selectedCard, setSelectedCard] = useState('')

  function handleEditAvatarClick() {
    setEditAvatarPopup(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopup(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopup(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
    setImagePopup(true)
  }

  function closeAllPopups() {
    setEditAvatarPopup(false)
    setEditProfilePopup(false)
    setAddPlacePopup(false)
    setImagePopup(false)
  }

  return (
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

      <PopupWithForm
        name="edit-profile"
        title="Edit profile"
        buttonText="Save"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          aria-label="Name"
          type="text"
          className="form__input form__input_type_name"
          name="name"
          placeholder="Name"
          minLength="2"
          maxLength="40"
          aria-required="true"
          required
        />
        <span className="form__error" aria-live="polite"></span>

        <input
          aria-label="About me"
          type="text"
          className="form__input form__input_type_description"
          name="about"
          placeholder="About me"
          minLength="2"
          maxLength="200"
          aria-required="true"
          required
        />
        <span className="form__error" aria-live="polite"></span>
      </PopupWithForm>

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
  )
}

export default App
