import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Anyque from "./Anyque";
import "../../styles/landingpage.css";
import girl from "../../media/stud.jpg";

import HowItWorksHeader from "./HowItWorksHeader";
import "../../styles/howitworks.css";
import boy from "../../media/boy.jpeg";
import { Link } from "react-router-dom";

function DonerCredits() {
  return (
    <div>
      <Header />
      <HowItWorksHeader isdoner={true} />

      <div className="lady-1">
        <div className="b1">
          <img className="im1 imshaw" src={boy} alt="st" />
          <div className="text1" style={{ marginLeft: "3rem" }}>
            <h1 className="un-head">Expand your impaact with Donor Credits.</h1>
            <p className="un-p">
              When someone joins pride.edunomics.in to apply to your awards, we
              give you Donor Credits to apply towards current or future awards.
            </p>
            <Link to="/login">
              <button
                className="cr-button"
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                  background: "#005d33",
                }}
              >
                Become a Donor
              </button>
            </Link>
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
              On pride.edunomics.in, anyone and any company can create targeted
              funds that enable incredible people to reach their full potential.
            </p>
            <Link to="/login">
              <button
                className="cr-button"
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                  background: "#005d33",
                }}
              >
                Become a Donor
              </button>
            </Link>
          </div>
          <img
            className="im1 imshaw"
            src={girl}
            style={{ marginTop: "3rem" }}
            alt="st"
          />
        </div>
      </div>

      <Anyque />
      <Footer />
    </div>
  );
}

export default DonerCredits;
