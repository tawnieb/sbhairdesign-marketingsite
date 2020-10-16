import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import Bridal from "../Images/BridalPriceList.png";
import Pricelist from "../Images/PriceList.png";
import Extensions from "../Images/ExtensionsPriceList.png";

const Prices = () => {
  return (
    <div>
      <Header></Header>
      <div class="section-1" id="prices-page">
        <img
          id="price-list"
          src={Pricelist}
          alt="price list"
          style={{ height: "600px", objectFit: "scale-down" }}
        />
        <img
          id="price-list"
          src={Extensions}
          alt="extensions price list"
          style={{ height: "600px", objectFit: "scale-down" }}
        />
        <img
          id="price-list"
          src={Bridal}
          alt="bridal price list"
          style={{ height: "600px", objectFit: "scale-down" }}
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Prices;
