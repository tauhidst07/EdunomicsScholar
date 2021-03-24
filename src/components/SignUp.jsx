import React from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";
import edu from "../media/edu.png";

function SignUp() {
  return (
    <div className="signup-header">
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
          <Link to="/login" className="already">
            Already have an account?
          </Link>
        </div>
      </nav>

      <div className="loginbox">
        <h1 className="welcome">Sign Up as a Donor</h1>
        <form>
          <h2 className="uname">Name</h2>
          <input className="u-input" type="text" placeholder="Name" />
          <h2 className="uname">Username</h2>
          <input className="u-input" type="text" placeholder="username" />
          <h2 className="uname">Email</h2>
          <input className="u-input" type="text" placeholder="Email" />
          <h2 className="pass">Password</h2>
          <input className="u-input" type="password" placeholder="Password" />
          <h2 className="uname">DOB</h2>
          <input className="u-input" type="text" placeholder="Date of birth" />
          <h2 className="uname">Gender</h2>
          <input className="u-input" type="text" placeholder="Gender" />
          <h2 className="uname">Bio</h2>
          <input className="u-input" type="text" placeholder="Bio" />
          <h2 className="uname">Location</h2>
          <input className="u-input" type="text" placeholder="Location" />
          <h2 className="uname">Address</h2>
          <input className="u-input" type="text" placeholder="Address" />
          {/* <p className="forgot">forgot password ?</p> */}
          <button className="signin">Sign Up</button>
          {/* <p className="dont">Don't have an account?</p> */}
          <div className="option-signup" style={{ marginTop: "2rem" }}>
            <Link to="/signup" className="opt1">
              Sign up as a Donor
            </Link>
            <Link to="/signupApli" className="opt1">
              Sign up as an Applicant
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
