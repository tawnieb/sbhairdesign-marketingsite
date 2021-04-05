import React from "react";
import styled from "styled-components";
import Layout from "../Components/Layout";
import { devices } from "..//breakpoints";

const Container = styled.div`
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    padding-top: 20vh;
  }
`;

const Table = styled.table`
  margin: 20px;

  @media ${devices.tablet} {
    display: flex;
  }
`;

const Body = styled.tbody`
  text-align: left;
`;

const BodyMargin = styled(Body)`
  margin-right: 60px;
`;

const BoldRow = styled.td`
  font-weight: 300;
  letter-spacing: 0.5rem;
  font-size: 1.7rem;
  padding: 30px 0 20px 0;
`;

const StyledTitle = styled.h3`
  margin-top: 16px;
`;

const InfoWrapper = styled.div`
  margin: 0 20px;

  @media ${devices.tablet} {
    width: 60vw;
  }
`;

const StyledParagraph = styled.p`
  font-size: 1.1rem;
`;

const Prices = () => {
  return (
    <Layout>
      <Container>
        <StyledTitle>PRICES</StyledTitle>
        <Table>
          <BodyMargin>
            <tr>
              <BoldRow>CLASSIC COLOURS</BoldRow>
            </tr>
            <tr>
              <td>FULL HEAD TINT</td>
              <td>£47</td>
            </tr>
            <tr>
              <td>REGROWTH TINT</td>
              <td>£33</td>
            </tr>
            <tr>
              <td>TOUCH UP - PARTING + HAIRLINE</td>
              <td>£17</td>
            </tr>
            <tr>
              <BoldRow>CREATIVE COLOURS</BoldRow>
            </tr>
            <tr>
              <td>CLASSIC BALAYAGE - FULL HEAD</td>
              <td>£67</td>
            </tr>
            <tr>
              <td>CLASSIC BALAYAGE - REFRESH</td>
              <td>£57</td>
            </tr>
            <tr>
              <td>FOILIAGE - FULL HEAD</td>
              <td>£67</td>
            </tr>
            <tr>
              <td>FOILIAGE - REFRESH</td>
              <td>£57</td>
            </tr>
            <tr>
              <td>BLEACH BLONDE</td>
              <td>£57</td>
            </tr>
            <tr>
              <td>HIGHLIGHTS - FULL HEAD</td>
              <td>£63</td>
            </tr>
            <tr>
              <td>HIGHLIGHTS - HALF HEAD</td>
              <td>£50</td>
            </tr>
            <tr>
              <td>HIGHLIGHTS - PARTING + HAIRLINE</td>
              <td>£40</td>
            </tr>
          </BodyMargin>
          <Body>
            <tr>
              <BoldRow>UPGRADES</BoldRow>
            </tr>
            <tr>
              <td>TONER</td>
              <td>£12</td>
            </tr>
            <tr>
              <td>OLAPLEX</td>
              <td>£15</td>
            </tr>
            <tr>
              <td>ROOT MELT + TONER</td>
              <td>£18</td>
            </tr>
            <tr>
              <td>REGROWTH TINT ADD ON</td>
              <td>£20</td>
            </tr>
            <tr>
              <td>LONG/THICK HAIR</td>
              <td>£10</td>
            </tr>
            <tr>
              <BoldRow>FINISHES</BoldRow>
            </tr>
            <tr>
              <td>BLOWDRY</td>
              <td>£20</td>
            </tr>
            <tr>
              <td>CUT + BLOWDRY</td>
              <td>£33</td>
            </tr>
            <tr>
              <td>REDESIGN + BLOWDRY</td>
              <td>£40</td>
            </tr>
            <tr>
              <td>HAIR UP</td>
              <td>£40</td>
            </tr>
            <tr>
              <td>BRIDAL PACKAGES</td>
              <td>POA</td>
            </tr>
          </Body>
        </Table>
        <InfoWrapper>
          <StyledParagraph>
            For new clients we strongly recommend booking a consultation to
            create a realistic plan with your specialist.
          </StyledParagraph>
          <StyledParagraph>
            Costings for colour changes and colour corrections are determined
            during your consultation (please let us know before booking if you
            feel that you may need a colour correction or a colour change, as
            more time is likely needed).
          </StyledParagraph>
        </InfoWrapper>
      </Container>
    </Layout>
  );
};

export default Prices;
