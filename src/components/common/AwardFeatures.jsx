import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Anyque from "./Anyque";
import HowItWorksHeader from "./HowItWorksHeader";
import "../../styles/howitworks.css";
import { Link } from "react-router-dom";

function AwardFeatures() {
  return (
    <div>
      <Header />
      <HowItWorksHeader isaward={true} />
      <div
        className="max"
        style={{ textAlign: "center", marginTop: "4rem", marginBottom: "3rem" }}
      >
        <h1 style={{ fontWeight: 800, fontSize: "54px", marginBottom: "2rem" }}>
          Fully customized giving with{" "}
          <span style={{ color: "#005d33" }}>Edunomics</span>
        </h1>
        <p
          style={{
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: 1.15,
            color: "grey",
          }}
        >
          Setting up scholarships, grants, and more on edunomics.in is
          effortless. Create a new award in minutes – we do the heavy lifting
          for you.
        </p>
      </div>
      <div className="mid-award"></div>
      <div className="free-app">
        <h1 style={{ marginRight: "2rem" }}>
          Free for applicants, free for you
        </h1>
        <Link to="/login">
          <button className="cr-button" style={{ background: "#005d33" }}>
            Become a Donar
          </button>
        </Link>
      </div>
      <Anyque />
      <Footer />
    </div>
  );
}

export default AwardFeatures;
