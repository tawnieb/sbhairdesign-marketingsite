import React from "react";
import styled from "styled-components";
import Bridal from "../Images/bridal_pricelist.png";
import Pricelist from "../Images/hair_pricelist.png";
import Extensions from "../Images/extensions_pricelist.png";
import Wedding from "../Images/wedding_pricelist.png";
import Layout from "../Components/Layout";

const Wrapper = styled.div`
  padding-top: 190px;
  padding-bottom: 20px;
  height: 2000px;
  display: flex;
  flex-direction: column;
  background-image: url("../Images/LeafBackgroundFaded.jpeg");
`;

const PriceList = styled.img`
  margin: 20px;
  height: 700px;
  object-fit: scale-down;
`;

const Prices = () => {
  return (
    <Layout>
      <Wrapper>
        <PriceList src={Pricelist} alt="price list" />
        <PriceList src={Extensions} alt="extensions price list" />
        <PriceList src={Wedding} alt="bridal price list" />
        <PriceList src={Bridal} alt="bridal price list" />
      </Wrapper>
    </Layout>
  );
};

export default Prices;
