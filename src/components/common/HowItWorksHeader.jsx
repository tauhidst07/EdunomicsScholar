import React from "react";
import "../../styles/howitworks.css";
import { Link } from "react-router-dom";

function HowItWorksHeader({ isactive, isdoner, isaward, isprice, isfaq }) {
  return (
    <div className="top-how-container">
      <div className="howit-header">
        <Link to="/how-it-works">
          <h2 className={`how-it-works ${isactive ? "activeRoute" : ""} `}>
            How it Works
          </h2>
        </Link>
        <Link to="/doner-credits" className="how-it-works">
          <h2 className={`how-it-works ${isdoner ? "activeRoute" : ""} `}>
            Doner Credits
          </h2>
        </Link>
        <Link to="/award" className="how-it-works">
          <h2 className={`how-it-works ${isaward ? "activeRoute" : ""} `}>
            Award Features
          </h2>
        </Link>
        <Link to="/pricing" className="how-it-works">
          <h2 className={`how-it-works ${isprice ? "activeRoute" : ""} `}>
            Pricing
          </h2>
        </Link>
        <Link to="/faq" className="how-it-works">
          <h2 className={`how-it-works ${isfaq ? "activeRoute" : ""} `}>FAQ</h2>
        </Link>
      </div>
    </div>
  );
}

export default HowItWorksHeader;
