import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose}) {
  return(
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
              className="popup__input popup__input-avatar"
              type="url"
              name="avatar"
              id="popup-avatar"
              placeholder="ссылка на аватар"
              required
            />
            <span className="popup-avatar-error popup__span-error"></span>
    </PopupWithForm>
  )
}
export default EditAvatarPopup