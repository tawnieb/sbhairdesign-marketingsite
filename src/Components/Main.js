import React from "react";
import Logo from "../Images/SBHairLogo.png";
import Hair from "../Images/BlondeHair.jpg";

function Main() {
  return (
    <div className="main">
      <div className="section-1">
        <img id="business-logo" src={Logo} alt="logo" />
      </div>
      <div className="section-2">
        <img className="section-2-image" src={Hair} alt="blond-hair" />
        <div className="section-2-text" id="about-me">
          <h2>ABOUT ME</h2>
          <p>
            SB HAIRDESIGN IS A HAIR DRESSING SALON STARTED BY SARAH BAVARO
            (THAT'S ME. HELLO!).
          </p>
          <p>
            IN 2010 I STUDIED AND BECAME LEVEL 3 QUALIFIED IN ALL ASPECTS OF
            HAIRDRESSING INCLUDING A QUALIFICATION IN MICRO RING HAIR
            EXTENSIONS. FROM THE MOMENT I BEGAN I KNEW IT WAS FOR ME AND I FELL
            IN LOVE WITH ALL THINGS HAIR!!
          </p>
          <p>
            IN 2016 MY PASSION FOR HAIRDRESSING TOOK ME AROUND THE WORLD,
            WORKING ON CRUISE SHIPS, & AFTER THAT, ALL THE WAY DOWN UNDER TO
            AUSTRALIA. IN 2019, AFTER YEARS OF WORKING IN SALONS, MY DAUGHTER
            WAS BORN AND TEH TIME WAS RIGHT TO OPEN A SALON OF MY OWN.
          </p>
          <p>
            AS YOUR HAIRDRESSER I AM DEVOTED TO YOUR HAIR AND LOVE TO ACHIEVE
            YOUR HAIR GOALS! AT THE SALON I ONLY BOOK ONE GUEST IN AT A TIME SO
            THE SPACE IS ENTIRELY YOURS TO RELEX AND ENJOY YOUR APPOINTMENT -
            MAKING IT A GREAT PLACE TO BRING YOUR BABY OR BEST FRIEND FOR GIRLY
            TIME.
          </p>
          <p>THANK YOU FOR READING TO FIND OUT MORE ABOUT ME!</p>
          <p>
            PLEASE DON'T HESITATE TO GET IN TOUCH IF THERE IS ANYTHING MORE YOU
            WOULD LIKE TO KNOW.
          </p>
          <p>BYE FOR NOW!</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
