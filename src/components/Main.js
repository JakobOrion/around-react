import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {
  const user = useContext(CurrentUserContext);
  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props;
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    api
      .getAppInfo()
      .then(([userInfo, cardList]) => {
        setCardList(cardList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === user._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cardList.map((c) =>
          c._id === card._id ? newCard : c
        );
        setCardList(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={user.avatar} alt={user.name} />
          <button
            type="button"
            aria-label="Edit Profile Picture"
            className="profile__avatar-edit"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name-text">{user.name}</h1>
          </div>
          <button
            type="button"
            aria-label="Edit Profile"
            className="profile__edit"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">{user.about}</p>
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
          {cardList.map((card) => (
            <Card
              card={card}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
