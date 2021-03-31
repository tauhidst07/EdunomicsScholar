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
    </div>
  );
}

export default HowItWorksHeader;
