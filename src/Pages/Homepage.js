import React from "react";
import styled from "styled-components";
import Layout from "../Components/Layout";
import Salon from "../Images/SalonPlaceholder.jpg";
import Logo from "../Images/LOGO.png";
import "../CSS/App.css";
import Carousel from "../Components/Carousel/Carousel.js";
import Background from "../Images/LeafBackground.png";

const Wrapper = styled.div`
  padding-top: 20vh;
`;

const PageSection = styled.div`
  height: 80vh;
`;

const LogoSection = styled(PageSection)`
  background-image: url(${Background});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MostPopular = styled(PageSection)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .h3 {
    padding-bottom: 70px;
  }
`;

const Images = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const BusinessLogo = styled.img`
  height: 25rem;
`;

const AboutSalon = styled(PageSection)`
  display: flex;
  padding: 24px;

  .img {
    width: 50%;
  }

  .div {
    width: 50%;
    padding: 50px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .h4 {
    padding-top: 30px;
  }
`;

const StyledImage = styled.img`
  height: 400px;
  width: 200px;
  object-fit: cover;
`;

const Homepage = () => {
  return (
    <Layout>
      <Wrapper>
        <LogoSection>
          <BusinessLogo src={Logo} alt="sb-hair-design-logo" />
        </LogoSection>
        <AboutSalon>
          <img src={Salon} alt="salon" />
          <div>
            <h3>ABOUT THE SALON</h3>
            <p>
              Bavaro's Hair Design is in a converted barn on Pear Tree Farm
              situated in the lovely village of Aldwincle. The salon and
              surrounding farm have extraordinary character and a welcoming
              charm. The salon itself was once the farms milking barn, active
              until recently. The large arched doors and windows allow huge
              amounts of natural light in, making the space feel bright and
              airy. At Bavaro's we offer a bespoke service. Together you and
              your expert will plan the journey to achieving your dream hair,
              which suits both you and your lifestyle.
            </p>
          </div>
        </AboutSalon>
        <MostPopular>
          <h3>MOST POPULAR</h3>
          <Images>
            <ImageWrapper>
              <StyledImage src={Salon} alt="" />
              <h4>MOST POPULAR</h4>
            </ImageWrapper>
            <ImageWrapper>
              <StyledImage src={Salon} alt="" />
              <h4>MOST POPULAR</h4>
            </ImageWrapper>
            <ImageWrapper>
              <StyledImage src={Salon} alt="" /> <h4>MOST POPULAR</h4>
            </ImageWrapper>
          </Images>
        </MostPopular>
        <PageSection>
          <h3>REVIEWS</h3>
          <Carousel />
        </PageSection>
      </Wrapper>
    </Layout>
  );
};

export default Homepage;
