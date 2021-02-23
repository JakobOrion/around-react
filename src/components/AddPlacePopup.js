import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const { isOpen, isLoading, onClose, onAddPlace } = props;
  const [placeName, setPlaceName] = useState('');
  const [placeLink, setPlaceLink] = useState('');
  const [isValid, setIsValid] = useState(false);

  function handlePlaceNameChange(e) {
    setPlaceName(e.target.value);
  }

  function handlePlaceLinkChange(e) {
    setPlaceLink(e.target.value);
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: placeName,
      link: placeLink,
    });
    setPlaceName('');
    setPlaceLink('');
  }

  return (
    <PopupWithForm
    name="add-card"
    title="New place"
    buttonText="Create"
    isOpen={isOpen}
    isValid={isValid}
    isLoading={isLoading}
    onClose={onClose}
    onSubmit={handleAddPlaceSubmit}
    onAddPlace={onAddPlace}
    >
    <input

      aria-label="Title"
      type="text"
      className="form__input form__input_type_card-title"
      name="name"
      value={placeName || ''}
      onChange={handlePlaceNameChange}
      placeholder="Title"
      minLength="1"
      maxLength="30"
      aria-required="true"
      required
    />
    <span className="form__error" aria-live="polite"></span>

    <input
      aria-label="Image URL"
      type="url"
      className="form__input form__input_type_url"
      name="link"
      value={placeLink || ''}
      onChange={handlePlaceLinkChange}
      placeholder="Image link"
      aria-required="true"
      required
    />
    <span className="form__error" aria-live="polite"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;