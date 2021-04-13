import React from "react";
import HowItWorksHeader from "./HowItWorksHeader";
import "../styles/howitworks.css";
import Header from "./Header";
import Footer from "./Footer";
import Anyque from "./Anyque";

function HowItWorks() {
  return (
    <div>
      <Header />
      <HowItWorksHeader />
      <div className="hero-how">
        <div className="hero-imgsec">
          <h2 className="h2-how">Use Donor Credits to expand your impact.</h2>
          <p className="p2-how">
            Increase the value of your existing awards or create new ones with
            Donor Credits, funded by pride.edunomics.in.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
      <div className="get-start">
        <h1>Get started by creating your donor profile.</h1>
        <button>Create Your Profile</button>
      </div>
      <Anyque />
      <Footer />
    </div>
  );
}

export default HowItWorks;
