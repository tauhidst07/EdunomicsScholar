import React from "react";
import "../styles/footer.css";
import edu from "../media/edu.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="foot-1">
        <div className="logo">
          <Link to="/" className="logo-main" style={{ cursor: "pointer" }}>
            <img className="log-pic" src={edu} alt="logo" />
          </Link>
          <h2 className="rights"> All Rights Reserved. Bold.org, Inc</h2>
        </div>
        <div className="footer-btns">
          <button className="f-btn1">Create a Scholarship</button>
          <button className="f-btn2">Apply to a Scholarship</button>
        </div>
      </div>
      <div className="down-footer">
        <div className="down1">
          <h1 className="doner">DONORS</h1>
          <p>How it works</p>
          <p>Doner Credits </p>
          <p>Award Features</p>

          <p>Pricing</p>
          <p>Doner FAQ</p>
        </div>
        <div className="down2">
          <h1 className="doner">applicants</h1>
          <p>Research Reports</p>
          <p>Scholarship Rules </p>
          <p>Easy Scholarships</p>

          <p>Scholarships for Women</p>
          <p>Scholarships for Nursing Students</p>
          <p>Scholarships for Black Students</p>
          <p>Scholarships for High School Seniors</p>
          <p>Ambassadors</p>
        </div>
        <div className="down3">
          <h1 className="doner">company</h1>
          <p>About Us</p>
          <p>Contact Us </p>
          <p>Careers</p>

          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Press Center</p>

          <p>Enrollment Solutions</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
