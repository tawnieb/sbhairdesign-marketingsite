import React from "react";
import { Link } from "react-router-dom";

function Nav({ handleClose, show }) {
  const showHideClassName = show ? "modal" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <button id="close-button" onClick={handleClose}>
        X
      </button>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>HOME</Link>
          </li>
          <li>
            <a href="#about-me">ABOUT ME</a>
          </li>
          <li>
            <a href="https://www.fresha.com/a/sbhairdesign-thrapston-14-scotney-way-hdank2qo/booking?menu=true">
              BOOK ONLINE
            </a>
          </li>
          <li>
            <a href="#footer">CONTACT</a>
          </li>
          <li>
            <Link to={`/prices`}>PRICES</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
