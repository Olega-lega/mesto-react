import '../index.css';
import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick(){
    setIsAddCardPopupOpen(true)
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsImagePopupOpen(false);
  };
  return (
    <div className="App">
      <Header />
      <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <EditAvatarPopup
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      />
      <EditProfilePopup
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      />
      <AddPlacePopup
      isOpen={isAddCardPopupOpen}
      onClose={closeAllPopups}
      />
      <ImagePopup
      isOpen={isImagePopupOpen}
      onClose={closeAllPopups}
      />

      <div className="popup popup_delete">
        <div className="popup__container popup__container-confirm">
          <button className="popup__button-close" type="button"></button>
          <form
            className="popup__form popup__form_delete"
            name="deleteCard"
            id="popup-delete-form"
          >
            <h3 className="popup__title popup__title-confirm">Вы уверены?</h3>
            <button
              className="popup__button-save popup__button-save_delete"
              type="submit"
            >
              Да
            </button>
          </form>
        </div>
      </div>

      <template id="element-template">
        <li className="element__cards-item">
          <button
            className="element__button-delete element__button-delete_hide"
            type="button"
            aria-label="button-delete"
          ></button>
          <img className="element__cards-img" src="#" alt="" />
          <div className="element__cards-group">
            <h2 className="element__cards-title"></h2>
            <div className="element__button_block">
              <button
                className="element__button"
                type="button"
                aria-label="button-like"
              ></button>
              <span className="element__button_count">0</span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
