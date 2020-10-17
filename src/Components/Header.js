import React, { useState } from "react";
import Nav from "./Nav";
import Logo from "../Images/SBHairLogo.png";
import Menu from "../Images/MenuIcon.png";

function Header() {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <header className="header">
      <button onClick={showModal}>
        <img id="menu-icon" src={Menu} alt="menu-icon" />
      </button>
      <Nav show={show} handleClose={hideModal} />
      <img id="header-logo" src={Logo} alt="logo" />
      <a
        id="book-online"
        href="https://www.fresha.com/a/sbhairdesign-thrapston-14-scotney-way-hdank2qo/booking?menu=true"
      >
        <p>BOOK ONLINE</p>
      </a>
    </header>
  );
}

export default Header;
