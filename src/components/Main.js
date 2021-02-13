import { useEffect, useState } from "react";
import { api } from "../utils/Api";

function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace } = props;

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cardList, setCards] = useState([]);

  useEffect(() => {
    api
      .getAppInfo()
      .then(([userInfo, cardList]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(cardList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt={userName} />
          <button
            type="button"
            aria-label="Edit Profile Picture"
            className="profile__avatar-edit"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name-text">{userName}</h1>
          </div>
          <button
            type="button"
            aria-label="Edit Profile"
            className="profile__edit"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          type="button"
          aria-label="Add Photo Card"
          className="profile__add"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="photo-cards">
        <ul className="photo-cards__group">
          {cardList.map(card => (
            <li className="photo-card">
            <button
              type="button"
              aria-label="Delete"
              className="photo-card__delete-button"
              hidden
            ></button>
            <img
              className="photo-card__image"
              src={card.link}
              alt={card.name}
            />
            <div className="photo-card__info">
              <h2 className="photo-card__title">{card.name}</h2>
              <button
                type="button"
                aria-label="Like"
                className="photo-card__heart"
              ></button>
              <div className="photo-card__likes">{card.likes.length}</div>
            </div>
          </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
