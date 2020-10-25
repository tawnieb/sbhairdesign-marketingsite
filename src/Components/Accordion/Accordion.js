import React, { useState, useRef } from "react";
import "./Accordion.css";
import Chevron from "./Chevron";

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
    <div className="accordion-section">
      <button className={`accordion ${active}`} onClick={toggleAccordion}>
        <p className="accordion-title">{title}</p>
        <Chevron width={10} fill={"#777"} className={`${rotate}`} />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
        className="accordion-content"
      >
        <div
          className="accordion-text"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default Accordion;

//
