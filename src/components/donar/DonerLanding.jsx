import React from "react";
import "../../styles/donerlanding.css";
import { Link } from "react-router-dom";

function DonerLanding() {
  return (
    <div className="doner-landing">
      <div className="don-1 imshaw2">
        <Link
          to="/donergrant"
          className="heed"
          style={{ textDecoration: "none" }}
        >
          <h2>
            Continue as <br />a Donor
          </h2>
        </Link>

        <div className="svgg">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M6.75 13.5L11.25 9L6.75 4.5"
              stroke="#ACB4BF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <p style={{ color: "black" }}>
          Lets give back to society as scholarships, loans, fellowship,
          mentoring and part time jobs or whatever form you can !
        </p>
      </div>
      <div className="don-2 imshaw2">
        <h2>
          Continue as <br />
          an Applicant
        </h2>
        <div className="svgg">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M6.75 13.5L11.25 9L6.75 4.5"
              stroke="#ACB4BF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <p style={{ color: "black" }}>
          Explore opportunities to grow via getting recognised and connect with
          professionals who can make you leaders of Indian Dream !
        </p>
      </div>
    </div>
  );
}

export default DonerLanding;
