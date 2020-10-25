import React from "react";
import { Link } from "react-router-dom";
import AccessibleFocusOutline from "./AccessibleFocusOutline.js";

function Nav({ handleClose, show }) {
  const showHideClassName = show ? "modal" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <AccessibleFocusOutline>
        <button id="close-button" onClick={handleClose}>
          X
        </button>
      </AccessibleFocusOutline>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>HOME</Link>
          </li>
          <li>
            <Link to={`/aboutme`}>ABOUT ME</Link>
          </li>
          <li>
            <Link to={`/prices`}>PRICES</Link>
          </li>
          <li>
            <Link to={`/bridal`}>BRIDAL</Link>
          </li>
          <li>
            <Link to={`/extensions`}>EXTENSIONS</Link>
          </li>
          <li>
            <a href="https://www.fresha.com/a/sbhairdesign-thrapston-14-scotney-way-hdank2qo/booking?menu=true">
              BOOK ONLINE
            </a>
          </li>
          <li>
            <Link to={`/faqs`}>FAQ'S</Link>
          </li>
          <li>
            <a href="#footer">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
