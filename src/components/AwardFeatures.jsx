import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Anyque from "./Anyque";
import HowItWorksHeader from "./HowItWorksHeader";
import "../styles/howitworks.css";

function AwardFeatures() {
  return (
    <div>
      <Header />
      <HowItWorksHeader />
      <div
        className="max"
        style={{ textAlign: "center", marginTop: "4rem", marginBottom: "3rem" }}
      >
        <h1 style={{ fontWeight: 800, fontSize: "54px", marginBottom: "2rem" }}>
          Fully customized giving with Edunomics
        </h1>
        <p
          style={{
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: 1.15,
          }}
        >
          Setting up scholarships, grants, and more on Bold.org is effortless.
          Create a new award in minutes – we do the heavy lifting for you.
        </p>
      </div>
      <div className="mid-award"></div>
      <div className="free-app">
        <h1>Free for applicants, free for you</h1>

        <button className="cr-button">Become a Doner</button>
      </div>
      <Anyque />
      <Footer />
    </div>
  );
}

export default AwardFeatures;
