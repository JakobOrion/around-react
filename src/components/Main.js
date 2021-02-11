function handleEditAvatarClick() {
  document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
  document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup_type_add-card').classList.add('popup_opened');
}

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" />
          <button
            type="button"
            aria-label="Edit Profile Picture"
            className="profile__avatar-edit"
            onClick={handleEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name-text"></h1>
          </div>
          <button
            type="button"
            aria-label="Edit Profile"
            className="profile__edit"
            onClick={handleEditProfileClick}
          ></button>
          <p className="profile__description"></p>
        </div>
        <button
          type="button"
          aria-label="Add Photo Card"
          className="profile__add"
          onClick={handleAddPlaceClick}
        ></button>
      </section>

      <section className="photo-cards">
        <ul className="photo-cards__group"></ul>
      </section>
    </main>
  );
}

export default Main;
