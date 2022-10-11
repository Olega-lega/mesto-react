import React from "react";

function Main({onEditAvatar, onEditProfile, onAddPlace}) {
  return (
    <main className="content">
    <section className="profile content__profile">
      <div className="profile__avatar">
        <img className="profile__image" src="#" alt="Автор" />
        <button className="profile__pencel"
        onClick={onEditAvatar}></button>
      </div>
      <div className="profile__form">
        <div className="profile__from-info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button
            className="profile__button-edit"
            type="button"
            aria-label="button-edit"
            onClick={onEditProfile}
          ></button>
        </div>
        <p className="profile__subtitle">Исследователь океана</p>
      </div>
      <button
        className="profile__button-add"
        type="button"
        aria-label="button-add"
        onClick={onAddPlace}
      ></button>
    </section>

    <section className="element content__element">
      <ul className="element__cards-list"></ul>
    </section>
  </main>
  )
}
export default Main