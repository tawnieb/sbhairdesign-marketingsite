import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import key from "../key.js";

const FooterWrapper = styled.footer`
  height: 80vh;
`;

const Info = styled.div`
  padding: 30px;
`;

const MapWrapper = styled.div`
  filter: grayscale(100%);
  border-top: 5px solid black;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 6rem;
  padding: 5px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Info>
        <h3>GET IN TOUCH</h3>
        <p>SB Hair Design</p>
        <a href="mailto:sbhairdesign1@gmail.com">
          <p>E: sbhairdesign1@gmail.com</p>
        </a>
        <p>Tel: 07915942723</p>
        <div>
          <a href="https://www.facebook.com/bavaroshairdesign" target="_none">
            <StyledIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/bavaroshairdesign" target="_none">
            <StyledIcon icon={faInstagramSquare} />
          </a>
        </div>
      </Info>
      <MapWrapper>
        <h3>FIND ME</h3>
        <div>
          <iframe
            id="google-map"
            width="100%"
            title="change-maps"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://www.google.com/maps/embed/v1/place?key=${key}=place_id:ChIJn6g_HiWXd0gR775iZ2wH_iE`}
            aria-label="Via oriani 22 Cervia"
          ></iframe>
        </div>
      </MapWrapper>
    </FooterWrapper>
  );
};

export default Footer;
