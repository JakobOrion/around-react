function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace } = props;

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" />
          <button
            type="button"
            aria-label="Edit Profile Picture"
            className="profile__avatar-edit"
            onClick={onEditAvatar}
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
            onClick={onEditProfile}
          ></button>
          <p className="profile__description"></p>
        </div>
        <button
          type="button"
          aria-label="Add Photo Card"
          className="profile__add"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="photo-cards">
        <ul className="photo-cards__group"></ul>
      </section>
    </main>
  );
}

export default Main;
