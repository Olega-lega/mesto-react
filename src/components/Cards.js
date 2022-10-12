import React from "react";

function Card ({card, cardOpen}) {
  
  function handleCardClick() {
    cardOpen(card);
  };

  return(
        <li className="element__cards-item">
          <button
            className="element__button-delete element__button-delete_hide"
            type="button"
            aria-label="button-delete"
          ></button>
          <img className="element__cards-img" src={card.link} alt={card.name} onClick={handleCardClick}/>
          <div className="element__cards-group">
            <h2 className="element__cards-title">{card.name}</h2>
            <div className="element__button_block">
              <button
                className="element__button"
                type="button"
                aria-label="button-like"
              ></button>
              <span className="element__button_count">{card.likes.length}</span>
            </div>
          </div>
        </li>
  )
}

export default Card