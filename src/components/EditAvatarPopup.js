import { useRef, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const { isOpen, isLoading, onClose, onUpdateAvatar } = props;
  const userAvatarRef = useRef();
  const [isValid, setIsValid] = useState(false);

  function handleAvatarSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(userAvatarRef.current.value);
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Change profile picture"
      buttonText="Save"
      isOpen={isOpen}
      isValid={isValid}
      isLoading={isLoading}
      onClose={onClose}
      onSubmit={handleAvatarSubmit}
      onUpdateAvatar={onUpdateAvatar}
    >
      <input
        ref={userAvatarRef}
        aria-label="Image URL"
        type="url"
        className="form__input form__input_type_url"
        name="avatar"
        placeholder="Image link"
        aria-required="true"
        required
      />
      <span className="form__error" aria-live="polite"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
