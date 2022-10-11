import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose}) {
  return(
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      >
          <input
              className="popup__input popup__input-name"
              type="text"
              name="name"
              id="name-input"
              minLength="2"
              maxLength="40"
              placeholder="Имя Фамилия"
              required
            />
            <span className="name-input-error popup__span-error"></span>
            <input
              className="popup__input popup__input-activity"
              type="text"
              name="about"
              id="job-input"
              minLength="2"
              maxLength="200"
              placeholder="Вид деятельности"
              required
            />
            <span className="job-input-error popup__span-error"></span>
      </PopupWithForm>
  )
}
export default EditProfilePopup;