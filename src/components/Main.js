import { useEffect, useState } from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = props;

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
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
            <Card
              card={card}
              onCardClick={onCardClick} 
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
