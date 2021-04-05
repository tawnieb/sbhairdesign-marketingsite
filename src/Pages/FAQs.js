import React from "react";
import styled from "styled-components";
import Layout from "../Components/Layout";
import Accordion from "../Components/Accordion/Accordion.js";
import { devices } from "..//breakpoints";

const FAQ = styled.div`
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    padding-top: 20vh;
    padding-bottom: 50px;
  }
`;

const Header = styled.h3`
  width: 95vw;
  letter-spacing: 1.5rem;
  line-height: 5rem;
  padding-right: 10px;
  padding-bottom: 10px;

  @media ${devices.tablet} {
    padding-bottom: 50px;
    width: 40vw;
  }
`;

const questions = [
  {
    title:
      "I would like my hair coloured but i'm not sure what I want. What should I do?",
    answer:
      "A consultation is a good place to start. Bring some pictures along of what you like and dislike we can discuss in detail what needs to be done to achieve the desired finished look. If you cannot schedule in a consultation, send me the photos via text or email and I will help advise the best I can over the phone.",
  },
  {
    title: "What is Balayage?",
    answer:
      "Balayage is a French word and it means “to paint”. In the hairdressing world its a freehand painting technique use to apply bespoke colour to your hair, giving the finished result of naturally sun kissed hair. This can be as bold or subtle as you choose, we can discuss these details during your consultation. It is good for those looking for a low maintenance colour.",
  },
  {
    title: "What is Foiliage?",
    answer:
      "Somewhere between Balayage and highlights lays a “Foiliage” It has a more saturated, less natural finish than a Balayage, but more natural finish than highlights. A Foiliage technique leave the colour blurred out from the roots, no harsh lines. It is another good lower maintenance option.",
  },
  {
    title: "What are Babylights?",
    answer:
      "Babylights are very delicate, highlights. They are used to designed the most natural effect, as if your hair is naturally lightened in the sun (from root to tip) It is sometimes combined with other techniques like highlights, Balayage and Foiliage to give your hair a fully tailored finish. They can also be a great way to introduce colour if you fancy a change and want to keep it subtle.",
  },
  {
    title: "What is a face frame?",
    answer:
      "Face framing goes hand in hand with a Balayage or Foiliage because it's a great way to add more natural looking brightness around the face. It accentuates both the hair colour and facial features and adds to a beautiful dimensional effect.",
  },
  {
    title: "What is a root melt?",
    answer:
      "A root melt is a technique used to blend the colour down from the roots. Often applied at the same time as a toner for maximum blend and natural looking finish.",
  },
  {
    title: "Do I need a skint test?",
    answer:
      "Yes! This is for your health. Reactions to hair colour can be quite severe so even if you've had a hair colour before with no reaction, when you come to me for the first time a skin test is required. You may also be required to have a new skin test at any point.",
  },
  {
    title: "Does colouring my hair cause damage?",
    answer:
      "The simple answer is yes, it could do. If you're not following the correct aftercare advice. Using a bond restoring treatment like Olaplex, will also help hugely. It can prevent and mend damage caused by colouring... Its basically magic in a bottle!",
  },
  {
    title: "I'm pregnant, can I still have my hair coloured?",
    answer:
      "This is a really common question and there is no evidence to support either side. So it is entirely your decision to colour hair during pregnancy or when breastfeeding or not. You will be required to have a skin test 48 hours before your appointment.",
  },
  {
    title: "My hair is black and I’d like to go blonde, is this possible?",
    answer:
      "We see a lot of clients that have been colouring their hair dark, either professionally or with a home kit. Be aware, it is a long journey to get your hair to a shade of light blonde. Our main priority is the condition of your hair, so we will work with you to brighten your hair over many visits and we always recommend treatments at home in between to keep your hair in a healthy condition.",
  },
  {
    title: "What does hair permanent straightening do?",
    answer:
      "It does 'exactly what it says on the tin', it permanently straightens your hair. It can be used on coloured hair. (As long as the hair isn't showing signs of damage) It grows out just like a colour would and can also 'fade' if the correct aftercare isn't followed. Therefore you can expect it to last anywhere from 2-6 months, depending on the aftercare.",
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
