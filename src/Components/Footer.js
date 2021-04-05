import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import key from "../key";
import { devices } from "../breakpoints";

const FooterWrapper = styled.footer`
  height: 80vh;
`;

const FooterInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  padding: 30px 0;
  align-items: center;
`;

const MapWrapper = styled.div`
  filter: grayscale(100%);
  border-top: 5px solid black;
  height: 30vh;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 6rem;
  padding: 5px;
`;

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <FooterInformation>
        <Info>
          <h3>FIND US</h3>
          <p>Peartree Farm</p>
          <p>31A Main Street</p>
          <p>Aldwincle</p>
          <p>NN14 3EL</p>
          <p>
            <b>FREE PRIVATE CAR PARK OPPOSITE THE SALON</b>
          </p>
        </Info>
        <Info>
          <h3>GET IN TOUCH</h3>
          <p>Bavaro’s Hair Design</p>
          <a href="mailto:sbhairdesign1@gmail.com">
            <p>E: sbhairdesign1@gmail.com</p>
          </a>
          <p>Tel: 07915942723</p>
          <div>
            <a href="https://www.facebook.com/bavaroshairdesign" target="_none">
              <StyledIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/bavaroshairdesign"
              target="_none"
            >
              <StyledIcon icon={faInstagramSquare} />
            </a>
          </div>
        </Info>
        <Info>
          <h3>OPENING TIMES</h3>
          <p>TUESDAY 9-5</p>
          <p>WEDNESDAY 10-8</p>
          <p>THURSDAY 9-5</p>
          <p>FRIDAY 9-5</p>
          <p>SATURDAY 9-1</p>
        </Info>
      </FooterInformation>

      <MapWrapper>
        <h3>FIND US</h3>
        <iframe
          height="100%"
          width="100%"
          title="change-maps"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={`https://www.google.com/maps/embed/v1/place?key=${key}=place_id:ChIJn6g_HiWXd0gR775iZ2wH_iE`}
          aria-label="Via oriani 22 Cervia"
        ></iframe>
      </MapWrapper>
    </FooterWrapper>
  );
};

export default Footer;
