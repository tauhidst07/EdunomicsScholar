import React from "react";
import "../styles/any.css";
import { Link } from "react-router-dom";

function Anyque() {
  return (
    <div className="main-any">
      <div className="any-main">
        <div className="svg-back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M15.75 11.25C15.75 11.6478 15.592 12.0294 15.3107 12.3107C15.0294 12.592 14.6478 12.75 14.25 12.75H5.25L2.25 15.75V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H14.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V11.25Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <div className="any-que">
          <h1 style={{ color: "black" }}>Any questions??</h1>
          <p>Contact our Donor Team</p>
        </div>
      </div>
      <div className="any-main">
        <div className="svg-back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M15.75 11.25C15.75 11.6478 15.592 12.0294 15.3107 12.3107C15.0294 12.592 14.6478 12.75 14.25 12.75H5.25L2.25 15.75V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H14.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V11.25Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div className="any-que">
          <p style={{ color: "black", marginBottom: "1rem" }}>
            Learn more about edunomics
          </p>
          <Link to="faq">
            <h1>Read Your FAQs ?</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Anyque;
