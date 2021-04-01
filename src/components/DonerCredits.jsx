import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Anyque from "./Anyque";
import "../styles/landingpage.css";
import girl from "../media/girl.jpg";

import HowItWorksHeader from "./HowItWorksHeader";
import "../styles/howitworks.css";
import boy from "../media/boy.jpeg";

function DonerCredits() {
  return (
    <div>
      <Header />
      <HowItWorksHeader />

      <div className="lady-1">
        <div className="b1">
          <img className="im1" src={boy} alt="st" />
          <div className="text1">
            <h1 className="un-head">Expand your impaact with Donor Credits.</h1>
            <p className="un-p">
              When someone joins Bold.org to apply to your awards, we give you
              Donor Credits to apply towards current or future awards.
            </p>
            <button
              className="cr-button"
              style={{ textAlign: "center", marginTop: "2rem" }}
            >
              Become a Donor
            </button>
          </div>
        </div>
      </div>
      <div className="lady-1">
        <div className="b1">
          <div className="text1" style={{ marginRight: "2rem" }}>
            <h1 className="un-head">
              Unlocking Impact Through Targeted Scholarships, Grants and
              Fellowships
            </h1>
            <p className="un-p">
              On Bold.org, anyone and any company can create targeted funds that
              enable incredible people to reach their full potential.
            </p>
            <button
              className="cr-button"
              style={{ textAlign: "center", marginTop: "2rem" }}
            >
              Become a Donor
            </button>
          </div>
          <img className="im1" src={girl} alt="st" />
        </div>
      </div>

      <Anyque />
      <Footer />
    </div>
  );
}

export default DonerCredits;
