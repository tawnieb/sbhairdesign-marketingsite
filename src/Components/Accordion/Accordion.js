import React, { useState, useRef } from "react";
import styled from "styled-components";
import "./Accordion.css";
import Chevron from "./Chevron";
import { devices } from "../../breakpoints";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e5e5e5;
  width: 90vw;
  justify-content: space-between;

  @media ${devices.tablet} {
    width: 70vw;
  }
`;

const Title = styled.p`
  font-size: 1.8rem;
`;

const Text = styled.div`
  font-size: 1.4rem;
  text-align: start;
  padding-left: 28px;
  padding-bottom: 20px;
`;

const Content = styled.div`
  overflow: auto;
  transition: max-height 0.6s ease;
`;

const Accordion = ({ title, content }) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("accordion-icon");

  const contentRef = useRef(null);

  function toggleAccordion() {
    setActive(active === "" ? "active" : "");
    setHeight(
      active === "active" ? "0px" : `${contentRef.current.scrollHeight}px`
    );
    setRotate(active === "active" ? "accordion-icon" : "accordion-icon-rotate");
  }

  return (
    <AccordionSection>
      <button className={`accordion ${active}`} onClick={toggleAccordion}>
        <Title>{title}</Title>
        <Chevron width={10} fill={"#777"} className={`${rotate}`} />
      </button>
      <Content ref={contentRef} style={{ maxHeight: `${height}` }}>
        <Text dangerouslySetInnerHTML={{ __html: content }} />
      </Content>
    </AccordionSection>
  );
};

export default Accordion;

//
