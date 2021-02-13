function ImagePopup(props) {
  const { card, isOpen, onClose } = props;

  return (
    <div className={`popup popup_type_image ${isOpen && 'popup_opened'}`}>
      <div className="popup__container popup__container_figure">
        <button
          type="button"
          aria-label="Close"
          className="popup__close"
          onClick={onClose}
        ></button>
        <figure className="popup__figure">
          <img className="popup__image" src={card.link} alt={card.name}/>
          <figcaption className="popup__image-title">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
