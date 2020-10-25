import React from "react";
import Layout from "../Components/Layout";
import Accordion from "../Components/Accordion/Accordion.js";

const questions = [
  { title: "QUESTION 1", answer: "answer 1" },
  { title: "QUESTION 2", answer: "answer 2" },
  { title: "QUESTION 3", answer: "answer 3" },
];

const FAQs = () => {
  return (
    <Layout>
      <div className="faq">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        {questions.map((question, index) => {
          return (
            <Accordion
              title={question.title}
              content={question.answer}
              key={index}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default FAQs;
