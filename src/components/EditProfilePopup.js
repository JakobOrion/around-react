import { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const user = useContext(CurrentUserContext);

  useEffect(() => {
    setName(user.name);
    setDescription(user.about);
  }, [user]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name, 
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Edit profile"
      buttonText="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        aria-label="Name"
        type="text"
        className="form__input form__input_type_name"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
        minLength="2"
        maxLength="40"
        aria-required="true"
        required
      />
      <span className="form__error" aria-live="polite"></span>

      <input
        aria-label="About me"
        type="text"
        className="form__input form__input_type_description"
        name="about"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="About me"
        minLength="2"
        maxLength="200"
        aria-required="true"
        required
      />
      <span className="form__error" aria-live="polite"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
