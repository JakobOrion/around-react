import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main />
        <Footer />
      </div>

      <div className="popup popup_type_edit-avatar">
        <div className="popup__container">
          <h3 className="popup__title">Change profile picture</h3>
          <button
            type="button"
            aria-label="Close"
            className="popup__close"
          ></button>
          <form className="popup__form form__avatar-edit" name="editAvatar">
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

            <button type="submit" name="Save" className="form__submit">
              Save
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_edit-profile">
        <div className="popup__container">
          <h3 className="popup__title">Edit profile</h3>
          <button
            type="button"
            aria-label="Close"
            className="popup__close"
          ></button>
          <form className="popup__form form__profile-edit" name="editProfile">
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

            <button type="submit" name="Save" className="form__submit">
              Save
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <h3 className="popup__title">New place</h3>
          <button
            type="button"
            aria-label="Close"
            className="popup__close"
          ></button>
          <form className="popup__form form__add-card" name="addCard">
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

            <button
              type="submit"
              name="Create"
              className="form__submit form__submit_disabled"
              disabled
            >
              Create
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_image">
        <div className="popup__container popup__container_figure">
          <button
            type="button"
            aria-label="Close"
            className="popup__close"
          ></button>
          <figure className="popup__figure">
            <img className="popup__image" />
            <figcaption className="popup__image-title"></figcaption>
          </figure>
        </div>
      </div>

      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <h3 className="popup__title">Are you sure?</h3>
          <button
            type="button"
            aria-label="Close"
            className="popup__close"
          ></button>
          <form className="popup__form form__delete-card" name="deleteCard">
            <button type="submit" className="form__submit form__submit-delete">
              Yes
            </button>
          </form>
        </div>
      </div>

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
