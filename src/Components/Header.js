import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../Images/LOGO.png";
import Menu from "../Images/MenuIcon.png";
import AccessibleFocusOutline from "./AccessibleFocusOutline.js";
import { devices } from "..//breakpoints";

const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 15vh;
  background: white;
  z-index: 1;
  box-shadow: 5px 10px 15px #c3c3c3;

  @media ${devices.tablet} {
    height: 20vh;
  }
`;

const StyledMenuIcon = styled.img`
  height: 40px;
  padding: 0px 20px;

  @media ${devices.tablet} {
    padding: 0px 43px;
  }
`;

const StyledHeaderLogo = styled.img`
  height: 10vh;

  @media ${devices.tablet} {
    height: 18vh;
  }
`;

const BookOnline = styled.a`
  font-size: 1.7rem;
  font-weight: 400;
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: flex-end;
  font-size: 40px;
  font-weight: 700;
  width: 100%;
  padding: 10px;
  padding-right: 40px;
`;

const Navbar = styled.div`
  display: ${({ showNav }) => (showNav ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 999;
  letter-spacing: 0.3em;
  font-size: 25px;
  flex-direction: column;
  padding-top: 30px;
  box-shadow: 5px 10px 15px #c3c3c3;

  @media ${devices.largeMobile} {
    width: 60%;
  }

  @media ${devices.tablet} {
    width: 40%;
  }

  @media ${devices.laptop} {
    width: 30%;
  }
`;

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const node = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current && node.current.contains(e.target)) {
      return;
    }
    setShowNav(false);
  };

  return (
    <HeaderWrapper>
      <AccessibleFocusOutline>
        <button onClick={() => setShowNav(true)}>
          <StyledMenuIcon src={Menu} alt="menu-icon" />
        </button>
      </AccessibleFocusOutline>
      <Navbar showNav={showNav} ref={node}>
        <AccessibleFocusOutline>
          <CloseButton onClick={() => setShowNav(false)}>X</CloseButton>
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
              <a
                href="https://www.fresha.com/a/bavaros-hair-design-aldwincle-31-main-street-c2rz0crr/booking?menu=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                BOOK ONLINE
              </a>
            </li>
            <li>
              <Link to={`/extensions`}>EXTENSIONS</Link>
            </li>
            <li>
              <Link to={`/bridal`}>BRIDAL</Link>
            </li>
            <li>
              <Link to={`/faqs`}>FAQ'S</Link>
            </li>
            <li>
              <a href="#footer">GET IN TOUCH</a>
            </li>
          </ul>
        </nav>
      </Navbar>
      <Link to={`/`}>
        <StyledHeaderLogo src={Logo} alt="logo" />
      </Link>
      <BookOnline
        href="https://www.fresha.com/a/bavaros-hair-design-aldwincle-31-main-street-c2rz0crr/booking?menu=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>BOOK ONLINE</p>
      </BookOnline>
    </HeaderWrapper>
  );
};

export default Header;
