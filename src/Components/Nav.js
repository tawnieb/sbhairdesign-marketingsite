import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AccessibleFocusOutline from "./AccessibleFocusOutline.js";

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
  width: 30%;
  height: 100vh;
  background: white;
  z-index: 999;
  letter-spacing: 0.3em;
  font-size: 25px;
  flex-direction: column;
  padding-top: 30px;
  box-shadow: 5px 10px 15px #c3c3c3;
`;

const Nav = ({ handleClose, showNav, ref }) => {
  return (
    <Navbar showNav={showNav} ref={ref}>
      <AccessibleFocusOutline>
        <CloseButton onClick={handleClose}>X</CloseButton>
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
  );
};

export default Nav;
