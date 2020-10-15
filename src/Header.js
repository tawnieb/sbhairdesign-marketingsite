import React, { useState } from "react";
import Modal from "./Modal";
import Logo from "./Logo.png";
import Menu from "./menu.png";

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
        <img src={Menu} alt="hamburger-icon" style={{ height: "40px" }} />
      </button>

      <Modal show={show} handleClose={hideModal} />
      <img src={Logo} alt="logo" style={{ height: "120px" }} />
      <a href="https://www.fresha.com/a/sbhairdesign-thrapston-14-scotney-way-hdank2qo/booking?menu=true">
        <span>BOOK ONLINE</span>
      </a>
    </header>
  );
}

export default Header;
