import React from "react";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import Bridal from "../Images/bridal_pricelist.png";
import Pricelist from "../Images/hair_pricelist.png";
import Extensions from "../Images/extensions_pricelist.png";
import Wedding from "../Images/wedding_pricelist.png";

const Prices = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="prices-page">
        <img className="price-list" src={Pricelist} alt="price list" />
        <img
          className="price-list"
          src={Extensions}
          alt="extensions price list"
        />
        <img className="price-list" src={Wedding} alt="bridal price list" />
        <img className="price-list" src={Bridal} alt="bridal price list" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Prices;
