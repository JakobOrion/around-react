function Card(props) {
  const { card } = props;
  return (
    <li className="photo-card">
      <button
        type="button"
        aria-label="Delete"
        className="photo-card__delete-button"
      ></button>
      <img className="photo-card__image" src={card.link} alt={card.name} />
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
  );
}

export default Card;
