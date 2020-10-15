import React from "react";

function Modal({ handleClose, show }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button id="close-button" onClick={handleClose}>
          X
        </button>
        <nav>
          <ul>
            <a href="#footer">
              <li>HOME</li>
            </a>
            <a href="#">
              <li>ABOUT SB HAIR DESIGN</li>
            </a>
            <a href="#">
              <li>PRICES</li>
            </a>
            <a href="https://www.fresha.com/a/sbhairdesign-thrapston-14-scotney-way-hdank2qo/booking?menu=true">
              <li>BOOK ONLINE</li>
            </a>
            <a href="#">
              <li>FOLLOW US</li>
            </a>
            <a href="#">
              <li>REVIEWS</li>
            </a>
            <a href="#">
              <li>FAQ's</li>
            </a>
            <a href="#">
              <li>CONTACT</li>
            </a>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Modal;
