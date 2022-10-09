import '../index.css'
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function handleEditAvatarClick(){
  document.querySelector('.popup_avatar').classList.add('popup_open')
}
function handleEditProfileClick(){
  document.querySelector('.popup_edit').classList.add('popup_open')
}
function handleAddPlaceClick(){
  document.querySelector('.popup_add').classList.add('popup_open')
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main
      editAvatar={handleEditAvatarClick}
      editProfile={handleEditProfileClick}
      addNewCard={handleAddPlaceClick}
      />
      <Footer />
      <div className="popup popup_edit">
        <div className="popup__container">
          <button
            className="popup__button-close"
            type="button"
            aria-label="button-close"
          ></button>
          <form
            className="popup__form popup__form_edit"
            name="popup-profile"
            noValidate
          >
            <h2 className="popup__title">Редактировать профиль</h2>
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
            <button
              className="popup__button-save popup__button-save_disabled"
              type="submit"
              disabled
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_add">
        <div className="popup__container">
          <button className="popup__button-close" type="button"></button>
          <form
            className="popup__form popup__form_add"
            name="popup-add"
            noValidate
          >
            <h2 className="popup__title">Новое место</h2>
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
            <button
              className="popup__button-save popup__button-add popup__button-save_disabled"
              type="submit"
              disabled
            >
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_img">
        <div className="popup__container-img">
          <button className="popup__button-close" type="button"></button>
          <img className="popup__object-picture" src="#" alt="" />
          <h2 className="popup__img-title"></h2>
        </div>
      </div>

      <div className="popup popup_avatar" aria-label="изменения аватара">
        <div className="popup__container popup__container-avatar">
          <button className="popup__button-close" type="button"></button>
          <form
            className="popup__form popup__form_avatar"
            name="form-avatar"
            noValidate
          >
            <h3 className="popup__title">Обновить аватар</h3>
            <input
              className="popup__input popup__input-avatar"
              type="url"
              name="avatar"
              id="popup-avatar"
              placeholder="ссылка на аватар"
              required
            />
            <span className="popup-avatar-error popup__span-error"></span>
            <button
              className="popup__button-save popup__button-save_disabled"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

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
