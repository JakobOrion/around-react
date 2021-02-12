function PopupWithImage() {
  return (
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
  );
}

export default PopupWithImage;
