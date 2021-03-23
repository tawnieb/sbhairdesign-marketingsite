import React from "react";
import styled from "styled-components";
import Layout from "../Components/Layout";
import Accordion from "../Components/Accordion/Accordion.js";

const FAQ = styled.div`
  padding-top: 200px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h3`
  width: 40vw;
  line-height: 5rem;
  padding-right: 10px;
  padding-bottom: 50px;
`;

const questions = [
  {
    title: "How long should my extensions last?",
    answer:
      "Depending on the type of hair, will depend on how long your hair extensions will last. The correct aftercare and regular maintenance (if you have professional extensions fitted) will increase the life span of your hair extensions. With good aftercare the hair can last up to one year.",
  },
  {
    title: "Can I heat my hair extensions?",
    answer:
      "Yes, Beauty Works Human Hair can be heated and styled, however this can reduce the lifespan of the hair extensions. Beauty Works recommend using heat no higher than 180 degrees. Please note: Styling and Heating all of Beauty Works products can damage the condition of the hair and reduces its life-span.",
  },
  {
    title: "Will extensions damage my hair?",
    answer:
      "To make sure your natural hair and your extensions maintain their qualities it is important to add both nutrition and moisture. Because hair extensions do not have their own follicles and always lie slightly away from the scalp, they do not share the same natural oils as your natural hair. This makes them even more dependent on added moisture and oils to keep from getting dry and coarse. A dry climate also makes the hair drier, especially during the winter months. The two most important products for giving your natural hair and your extensions the care and moisture they need are shampoo and conditioner. Shampoo gives your hair both nutrition and moisture while conditioner seals the hair strand. Using a hair mask 1-2 times a week is also a great way to give your hair that extra moisture boost. The hair mask, however, does not replace the effect of your conditioner, so always finish with conditioner.",
  },
];

const FAQs = () => {
  return (
    <Layout>
      <FAQ>
        <Header>FREQUENTLY ASKED QUESTIONS</Header>
        {questions.map((question, index) => {
          return (
            <Accordion
              title={question.title}
              content={question.answer}
              key={index}
            />
          );
        })}
      </FAQ>
    </Layout>
  );
};

export default FAQs;
