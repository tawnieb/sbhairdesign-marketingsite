import React from "react";
import styled from "styled-components";
import Sarah from "../Images/Sarah.jpg";
import Layout from "../Components/Layout";
import { devices } from "..//breakpoints";

const Wrapper = styled.div``;

const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15vh;

  .img {
    width: 30%;
    object-fit: cover;
  }

  .div {
    padding: 50px;
    align-items: center;
    justify-content: center;
  }

  @media ${devices.tablet} {
    padding-top: 20vh;
    flex-direction: row;
    height: 100vh;
  }
`;

const StyledImg = styled.img`
  margin: 15px;
  border-radius: 10px;
  box-shadow: 5px 10px 15px #c3c3c3;
`;

const AboutMe = () => {
  return (
    <Layout>
      <Wrapper></Wrapper>
      <AboutMeWrapper>
        <StyledImg src={Sarah} alt="Sarah" />
        <div>
          <h3>ABOUT ME</h3>
          <p>
            The salon owner, Sarah Bavaro is passionate about hairdressing and
            always takes care to create the best possible hairstyle for you.
          </p>
          <p>
            Sarah has many years experience and several advanced level
            qualifications. She continues to stay up to date with latest trends
            and likes to experiment with
          </p>
          <p>
            She has previously worked in several high street salons and
            travelled the world working on Cruise Ships where she specialised in
            wedding hair. More recently, she had her own home salon.
          </p>
          <p>
            Thank you for reading to find out more about us! Please don't
            hesitate to get in touch if there is anything more you would like to
            know.
          </p>
          <p>We look forward to welcoming you soon.</p>
          <p></p>
          <q>
            “I feel so fortunate that I get to do what I love everyday, with
            wonderful clients I'm lucky enough to call my friends”
          </q>
          <cite>Sarah Bavaro</cite>
        </div>
      </AboutMeWrapper>
    </Layout>
  );
};

export default AboutMe;
