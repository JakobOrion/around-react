function PopupWithForm (props) {
  return(
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <h3 className="popup__title">{props.title}</h3>
        <button
          type="button"
          aria-label="Close"
          className="popup__close"
        ></button>
        <form className="popup__form" name={props.name}>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;