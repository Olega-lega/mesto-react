import React,{useState, useEffect} from "react";
import Card from "./Cards";

function Main({onEditAvatar, onEditProfile, onAddPlace, currentUser, cards }) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    setUserName(currentUser.name)
    setUserAvatar(currentUser.avatar)
    setUserDescription(currentUser.about)
  }, userName,userDescription,userAvatar)


  return (
    <main className="content">
    <section className="profile content__profile">
      <div className="profile__avatar">
        <img className="profile__image" src={userAvatar} alt="Автор" />
        <button className="profile__pencel"
        onClick={onEditAvatar}></button>
      </div>
      <div className="profile__form">
        <div className="profile__from-info">
          <h1 className="profile__title">{userName}</h1>
          <button
            className="profile__button-edit"
            type="button"
            aria-label="button-edit"
            onClick={onEditProfile}
          ></button>
        </div>
        <p className="profile__subtitle">{userDescription}</p>
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
      {cards.map((card) => (
          <Card
            card={card}
            // cardOpen={onClickCard}
          />
        ))}
    </section>
  </main>
  )
}
export default Main