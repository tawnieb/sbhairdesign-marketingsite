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
  background: black;

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
              Bavaro's Hair Design is a warm and welcoming Hair Salon, found in
              the heart of Aldwincle Village. (Near Thrapston)
            </p>
            <p>
              The Salon Owner, Sarah Bavaro is hugely passionate about
              hairdressing. She has worked previously in several high street
              salons, travelled the world working as a hair Stylist on Cruise
              Ships and more recently, had her own home hair studio.
            </p>
            <p>
              At Bavaro's we offer a bespoke service to deliver a look which
              suits both you and your lifestyle. Together you and your expert
              will plan the journey to achieving your dream hair. Our goal is to
              make you feel like the best version of yourself.
            </p>
            <p>
              Thank you for reading to find out more about us! Please don't
              hesitate to get in touch if there is anything more you would like
              to know. We look forward to welcoming you soon.
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
