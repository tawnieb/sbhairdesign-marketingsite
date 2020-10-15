import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import key from "./key.js";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="information">
        <h3 id="heading">GET IN TOUCH</h3>
        <p>SB Hair Design</p>
        <p>14 Scotney Way, Thrapston, Kettering, NN14 4SA</p>
        <p>E: sbhairdesign1@gmail.com</p>
        <p>Tel: 0739878064</p>
        <div>
          <a href="https://www.facebook.com/sbhairdesignnn" target="_none">
            <FontAwesomeIcon className="icon" icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/sbhairdesignn" target="_none">
            <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
          </a>
        </div>
      </div>
      <div className="map">
        <h3 id="heading">FIND US</h3>
        <div>
          <iframe
            id="google-map"
            title="change-maps"
            frameBorder="0"
            width="100%"
            height="350px"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://www.google.com/maps/embed/v1/place?key=${key}=place_id:ChIJn6g_HiWXd0gR775iZ2wH_iE`}
            aria-label="Via oriani 22 Cervia"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
