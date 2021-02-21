import PopupWithForm from './PopupWithForm';

function DeletePlacePopup(props) {
  const { card, isOpen, onClose, onConfirmDelete } = props;

  function handleConfirmSubmit(e) {
    e.preventDefault();

    onConfirmDelete(card);
  }

  return (
    <PopupWithForm
    name="delete-card"
    title="Are you sure?"
    buttonText="Yes"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleConfirmSubmit}
    />
  )
}

export default DeletePlacePopup;