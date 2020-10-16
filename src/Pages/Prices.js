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
      <div className="prices-page">
        <img className="price-list" src={Pricelist} alt="price list" />
        <img
          className="price-list"
          src={Extensions}
          alt="extensions price list"
        />
        <img className="price-list" src={Bridal} alt="bridal price list" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Prices;
