import React from "react"

function ImagePopup({isOpen}) {
  return(
    <div className="popup popup_img">
    <div className="popup__container-img">
      <button className="popup__button-close" type="button"></button>
      <img className="popup__object-picture" src="#" alt="" />
      <h2 className="popup__img-title"></h2>
    </div>
  </div>
  )
}
export default ImagePopup