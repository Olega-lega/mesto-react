import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose}) {
  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      >
     <input
              className="popup__input popup__input-place"
              type="text"
              name="name"
              id="place-input"
              minLength="2"
              maxLength="30"
              placeholder="Название"
              required
            />
            <span className="place-input-error popup__span-error"></span>
            <input
              className="popup__input popup__input-img"
              type="url"
              name="link"
              id="url-input"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="url-input-error popup__span-error"></span>
    </PopupWithForm>
  )
}
export default AddPlacePopup;