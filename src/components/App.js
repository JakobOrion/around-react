import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function handleEditAvatarClick() {
  document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
  document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup_type_add-card').classList.add('popup_opened');
}

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />

        <Footer />
      </div>

      <PopupWithForm
        name="edit-avatar"
        title="Change profile picture"
        buttonText="Save"
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

      <PopupWithForm name="edit-profile" title="Edit profile" buttonText="Save">
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

      <PopupWithForm name="add-card" title="New place" buttonText="Create">
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

      <ImagePopup />

      <template className="photo-card-template">
        <li className="photo-card">
          <button
            type="button"
            aria-label="Delete"
            className="photo-card__delete-button"
            hidden
          ></button>
          <img className="photo-card__image" />
          <div className="photo-card__info">
            <h2 className="photo-card__title"></h2>
            <button
              type="button"
              aria-label="Like"
              className="photo-card__heart"
            ></button>
            <div className="photo-card__likes">0</div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
