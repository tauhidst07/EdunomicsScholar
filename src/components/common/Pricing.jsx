import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Anyque from "../Anyque";
import HowItWorksHeader from "../HowItWorksHeader";
import "../../styles/howitworks.css";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div>
      <Header />
      <HowItWorksHeader isprice={true} />
      <div
        className="max"
        style={{ textAlign: "center", marginTop: "4rem", marginBottom: "3rem" }}
      >
        <h1 style={{ fontWeight: 800, fontSize: "54px", marginBottom: "2rem" }}>
          <span style={{ color: "blue" }}>Maximize</span> your impact
        </h1>
        <p
          style={{
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: 1.15,
          }}
        >
          100% of your donation will go directly to the educational costs of the
          winners you select.
        </p>
      </div>
      <div className="free-app">
        <h1>Free for applicants, free for you</h1>
        <div className="po1">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect
              x="1"
              y="1"
              width="16"
              height="16"
              rx="8"
              fill="#5D57FB"
            ></rect>
            <path
              d="M13 6L7.5 12L5 9.27273"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <p>Polished scholarship page to share broadly</p>
        </div>
        <div className="po1">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect
              x="1"
              y="1"
              width="16"
              height="16"
              rx="8"
              fill="#5D57FB"
            ></rect>
            <path
              d="M13 6L7.5 12L5 9.27273"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <p>1-on-1 support from our team at every step</p>
        </div>
        <div className="po1">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect
              x="1"
              y="1"
              width="16"
              height="16"
              rx="8"
              fill="#5D57FB"
            ></rect>
            <path
              d="M13 6L7.5 12L5 9.27273"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <p>A list of suggested finalists, based on your criteria</p>
        </div>
        <div className="po1">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect
              x="1"
              y="1"
              width="16"
              height="16"
              rx="8"
              fill="#5D57FB"
            ></rect>
            <path
              d="M13 6L7.5 12L5 9.27273"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <p>Interviews with finalists, organized by pride.edunomics.in</p>
        </div>
        <div className="po1">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect
              x="1"
              y="1"
              width="16"
              height="16"
              rx="8"
              fill="#5D57FB"
            ></rect>
            <path
              d="M13 6L7.5 12L5 9.27273"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <p>Featured communications to relevant schools</p>
        </div>
        <div className="po1">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect
              x="1"
              y="1"
              width="16"
              height="16"
              rx="8"
              fill="#5D57FB"
            ></rect>
            <path
              d="M13 6L7.5 12L5 9.27273"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <p>Easy way to accept any and all 3rd party donations</p>
        </div>
        <Link to="/login">
          <button className="cr-button">Create a scholarship now</button>
        </Link>
      </div>
      <Anyque />
      <Footer />
    </div>
  );
}

export default Pricing;
