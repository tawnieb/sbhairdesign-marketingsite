import React from "react";
import Layout from "../Components/Layout";
import Salon from "../Images/SalonPlaceholder.jpg";
import Logo from "../Images/SBHairLogo.png";
import "../CSS/App.css";
import Carousel from "../Components/Carousel/Carousel.js";

const Homepage = () => {
  return (
    <Layout>
      <div className="homepage">
        <div className="page-section logo-section">
          <img id="business-logo" src={Logo} alt="logo" />
        </div>
        <div className="about-salon">
          <img src={Salon} alt="salon" />
          <div>
            <h3>ABOUT THE SALON</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Magnum pi dick van dyke comb alpha trion cesar romero prince barin
              terry thomas, robot moustache east european cesar romero French
              café patron comb prince barin alpha trion super mario big daft
              brush dick van dyke terry thomas magnum pi jimi hendrix?
            </p>
            <p>
              Trimmed colonel mustard worn with distinction mexican’t Sergeant
              major clive dunn, decathlon champion worn with distinction trimmed
              Sergeant major cigars Nostrilis tickler ding-dong cream bun
              disaster mexican’t clive dunn colonel mustard, Sergeant major
              Nostrilis tickler colonel mustard cigars iron tache clive dunn
              ding-dong cream bun disaster dali worn with distinction decathlon
              champion mexican’t trimmed stache? Brad pitt fu manchu id vincent
              price robot moustache, fu manchu id brad pitt robot moustache
              chevron soup strainer professor plum vincent price?
            </p>
            <p>
              Nefarious man of the year 1986 dodgy uncle clive off-piste
              charming villain mexican’t face mop blacksmith? Pencil ian botham
              hulk hogan helllloooo spaghetti western leader of men spaghetti
              western, ian botham hulk hogan blue oyster bar spaghetti western
              leader of men pencil sterling godlike spaghetti western charlie
              chaplin ron jeremy mustachioed helllloooo what a bounder, sterling
              villain hulk hogan godlike charlie chaplin mustachioed spaghetti
              western educated spaghetti western leader of men ron jeremy
              helllloooo what a bounder bogie basket blue oyster bar ian botham
              pencil?
            </p>
          </div>
        </div>
        <div className="page-section most-popular">
          <h3>MOST POPULAR</h3>
          <div className="nottitle">
            <div className="images">
              <img src={Salon} alt=""></img>
              <h4>MOST POPULAR</h4>
            </div>
            <div className="images">
              <img src={Salon} alt=""></img>
              <h4>MOST POPULAR</h4>
            </div>
            <div className="images">
              <img src={Salon} alt=""></img>
              <h4>MOST POPULAR</h4>
            </div>
          </div>
        </div>
        <div className="page-section reviews">
          <h3>REVIEWS</h3>
          <Carousel />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
