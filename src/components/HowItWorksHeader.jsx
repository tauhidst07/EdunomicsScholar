import React from "react";
import "../styles/howitworks.css";
import { Link } from "react-router-dom";

function HowItWorksHeader() {
  return (
    <div className="top-how-container">
      <div className="howit-header">
        <Link to="/how-it-works" className="how-it-works">
          <h2>How it Works</h2>
        </Link>
        <Link to="/doner-credits" className="how-it-works">
          <h2>Doner Credits</h2>
        </Link>
        <Link to="/award" className="how-it-works">
          <h2>Award Features</h2>
        </Link>
        <Link to="/pricing" className="how-it-works">
          <h2>Pricing</h2>
        </Link>
        <Link to="/faq" className="how-it-works">
          <h2>FAQ</h2>
        </Link>
      </div>
      <div className="hero-how">
        <div className="hero-imgsec">
          <h2 className="h2-how">Use Donor Credits to expand your impact.</h2>
          <p className="p2-how">
            Increase the value of your existing awards or create new ones with
            Donor Credits, funded by Bold.org.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
      <div className="get-start">
        <h1>Get started by creating your donor profile.</h1>
        <button>Create Your Profile</button>
      </div>
    </div>
  );
}

export default HowItWorksHeader;
