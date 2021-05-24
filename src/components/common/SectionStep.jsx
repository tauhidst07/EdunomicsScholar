import React from "react";
import BMC from "../../media/CX_deployer-step-2.svg";
import Persona from "../../media/CX_deployer-step-1.svg";
import CJM from "../../media/CX_deployer-step-3.svg";
import KBB from "../../media/CX_deployer-step4.svg";
import Ideate from "../../media/CX_deployer-step-5.svg";
import "../../styles/section.css";

const SectionStep = ({
  img,
  title,
  text,
  text2,
  step,
  isReversed,
  isGradient,
}) => (
  <div className="top-section">
    <div className="row-sec">
      <div className="down-sec">
        <img
          src={img}
          alt="persona"
          className="img-sec1"
          style={{ height: "400px" }}
        />
      </div>
      <div className="contenmt-sec">
        <div className="step-h1">{step}</div>
        <hr className="hr-line" />
        <h1 className="step-text">{title}</h1>
        <div className="step-desc">
          <p style={{ fontSize: "1.2em" }}>{text}</p>
          <p style={{ fontSize: "1.2em" }}>{text2}</p>
        </div>
      </div>
    </div>
  </div>
);

export default () => {
  return (
    <div className="head-sec">
      <SectionStep
        title="Map the persona & empathy"
        text="Know your customer or users by mapping, their goals, aspirations, fears, thinking, dreams and digital habits."
        text2="What matters most to the persona and whose experience should be enhanced?"
        img={Persona}
        step="Step 1"
      />
      <SectionStep
        title="Design the value proposition"
        text="Use the business model canvas to identify and design values an organization should deliver to satisfy the needs of the customer."
        text2="What customer wants to achieve?"
        img={BMC}
        step="Step 2"
        isGradient
        isReversed
      />
      <SectionStep
        title="Map the customer journey"
        text="Map the moments of truth, touchpoints, activities, interactions and customer experience and storyboard the journey."
        text2="What are the start point and endpoint of the experience?"
        img={CJM}
        step="Step 3"
      />
      <SectionStep
        title="Ideate on the experience"
        text="Engage everyone, capture great ideas and tap the untapped knowledge by building on other’s ideas to transform the customer experience."
        text2="What solutions will lead to enhanced customer experience?"
        img={KBB}
        step="Step 4"
        isReversed
        isGradient
      />
      <SectionStep
        title="Manage execution of the best idea"
        text="Project management for the execution of the best idea, prototype, accelerate idea to implementation and continuously improve the experience."
        text2="What is the time to market to realize the transformed experience?"
        img={Ideate}
        step="Step 5"
      />
    </div>
  );
};
