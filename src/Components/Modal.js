import React from "react";
import { Link } from "react-router-dom";

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
            <Link to={`/`}>HOME</Link>
            <a href="#about-me">
              <li>ABOUT ME</li>
            </a>
            <a href="https://www.fresha.com/a/sbhairdesign-thrapston-14-scotney-way-hdank2qo/booking?menu=true">
              <li>BOOK ONLINE</li>
            </a>
            <a href="#footer">
              <li>CONTACT</li>
            </a>
            <Link to={`/prices`}>PRICES</Link>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Modal;
