import React, { useState, useEffect } from "react";
import Review from "./Review.js";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import "./carousel.css";

const reviews = [
  [
    {
      name: "Lucy Thornton-Reid",
      review:
        '"I have been having my hair done by Sarah for years and honestly wouldn’t want anyone else to do it! Completely professional and honest with everything from colour, cut and styling - always come away very happy both with my hair and having had a wonderful time"',
    },
    {
      name: "Rachel Tracy",
      review:
        '"My balayage looks gorgeous, and I\'m really happy with my cut. Thank you so much, I love it🥰"',
    },
    {
      name: "Jodie Holmes",
      review:
        '"Would highly recommend, not only is she an extremely lovely person she’s extremely talented and knowledgeable in hair. She is the only hairdresser that’s ever managed to do both a cut and colour that I’ve absolutely loved !"',
    },
  ],
  [
    {
      name: "Jack Parsler",
      review:
        '"Was unsure about having my hair and beard cut at home. But after seeing the excellent job she has done on my fiancé’s hair I gave it a go . Great cut both beard and hair and no long wait at the hair dressers. Would recommend to anyone."',
    },
    {
      name: "Charlotte Clarke",
      review:
        '"Sarah is a top stylist....I would recommend her to anyone! My hair is short and needs a regular cut but she always manages to cut it in such a way that the style grows out well! Top class 👏🏼"',
    },
    {
      name: "Kirsty Youngman",
      review:
        '"On Monday I had my first hair cut since the lock down. Communication about PPE was first class and reassuring. Everything is in place to make sure all the guidelines are followed. I love my cut and colour and enjoyed my time at the salon. Thank You and see you soon xx"',
    },
  ],
  [
    {
      name: "thrid row",
      review:
        '"Was unsure about having my hair and beard cut at home. But after seeing the excellent job she has done on my fiancé’s hair I gave it a go . Great cut both beard and hair and no long wait at the hair dressers. Would recommend to anyone."',
    },
    {
      name: "third row",
      review:
        '"Sarah is a top stylist....I would recommend her to anyone! My hair is short and needs a regular cut but she always manages to cut it in such a way that the style grows out well! Top class 👏🏼"',
    },
    {
      name: "third row",
      review:
        '"On Monday I had my first hair cut since the lock down. Communication about PPE was first class and reassuring. Everything is in place to make sure all the guidelines are followed. I love my cut and colour and enjoyed my time at the salon. Thank You and see you soon xx"',
    },
  ],
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = reviews.length;

  const goToPrevSlide = () => {
    activeIndex < 1
      ? setActiveIndex(length - 1)
      : setActiveIndex(activeIndex - 1);
  };

  const goToNextSlide = () => {
    activeIndex === length - 1
      ? setActiveIndex(0)
      : setActiveIndex(activeIndex + 1);
  };

  return (
    <div className="review-container">
      <LeftArrow className="arrow" goToPrevSlide={goToPrevSlide} />
      <div className="review-text-container">
        <Review className="display" reviews={reviews[activeIndex]} />
      </div>
      <RightArrow goToNextSlide={goToNextSlide} />
      <br />
    </div>
  );
}

export default Carousel;
