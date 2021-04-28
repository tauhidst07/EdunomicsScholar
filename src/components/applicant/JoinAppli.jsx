import React from "react";
import { Link } from "react-router-dom";
import edu from "../../media/edu.png";
function JoinAppli() {
  return (
    <div>
      <nav className="naavv">
        <Link
          to="/"
          className="logo-maain"
          style={{ cursor: "pointer", marginRight: "1rem" }}
        >
          <img className="log-pic" src={edu} alt="logo" />
        </Link>
        <div className="tog-1">
          <svg
            className="ic1"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M15 15.75V14.25C15 13.4544 14.6839 12.6913 14.1213 12.1287C13.5587 11.5661 12.7956 11.25 12 11.25H6C5.20435 11.25 4.44129 11.5661 3.87868 12.1287C3.31607 12.6913 3 13.4544 3 14.25V15.75"
              stroke="#8F99A6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z"
              stroke="#8F99A6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          {/* <button className="tg1">Donors</button>
          <button className="tg1">Applicants</button> */}
          <Link to="/loginApli" className="already">
            Already have an account?
          </Link>
        </div>
      </nav>
      <div className="join-d">
        <h1>Create Your Applicant Profile</h1>
        <p>
          Your profile will be included in each application you submit, so
          you'll always look great to scholarship and grant panels.
        </p>
        <Link to="/signupApli">
          <button className="btt">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default JoinAppli;
