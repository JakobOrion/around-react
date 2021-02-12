function PopupWithForm(props) {
  const { name, title, children, buttonText, isOpen } = props;

  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        <button
          type="button"
          aria-label="Close"
          className="popup__close"
        ></button>
        <form className="popup__form" name={name}>
          {children}
          <button
            type="submit"
            name={buttonText}
            className="form__submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
