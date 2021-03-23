import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Logo from "../Images/LOGO.png";
import Menu from "../Images/MenuIcon.png";
import AccessibleFocusOutline from "./AccessibleFocusOutline.js";

const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20vh;
  background: white;
  z-index: 1;
  box-shadow: 5px 10px 15px #c3c3c3;
`;

const StyledMenuIcon = styled.img`
  height: 40px;
  padding: 0px 43px;
`;

const StyledHeaderLogo = styled.img`
  height: 18vh;
`;

const BookOnline = styled.a`
  font-size: 1.7rem;
  font-weight: 400;
`;

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <HeaderWrapper>
      <AccessibleFocusOutline>
        <button onClick={() => setShowNav(true)}>
          <StyledMenuIcon src={Menu} alt="menu-icon" />
        </button>
      </AccessibleFocusOutline>
      <Nav showNav={showNav} handleClose={() => setShowNav(false)} />
      <Link to={`/`}>
        <StyledHeaderLogo src={Logo} alt="logo" />
      </Link>
      <BookOnline href="https://www.fresha.com/a/bavaros-hair-design-aldwincle-31-main-street-c2rz0crr/booking?menu=true">
        <p>BOOK ONLINE</p>
      </BookOnline>
    </HeaderWrapper>
  );
};

export default Header;
