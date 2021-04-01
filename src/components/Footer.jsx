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
          <Link to="/joindoner">
            <button className="f-btn1">Create a Scholarship</button>
          </Link>
          <Link to="/joinappli">
            <button className="f-btn2">Apply to a Scholarship</button>
          </Link>
        </div>
      </div>
      <div className="down-footer">
        <div className="down1">
          <h1 className="doner">DONORS</h1>
          <Link to="/how-it-works">
            <p>How it works</p>
          </Link>
          <Link to="/doner-credits">
            <p>Doner Credits </p>
          </Link>
          <Link to="/award">
            <p>Award Features</p>
          </Link>
          <Link to="/pricing">
            <p>Pricing</p>
          </Link>
          <Link to="/faq">
            <p>Doner FAQ</p>
          </Link>
        </div>
        <div className="down2">
          <h1 className="doner">applicants</h1>
          <p>Research Reports</p>
          <p>Scholarship Rules </p>
          <p>Easy Scholarships</p>

          <p>Scholarships for Women</p>
          <p>Scholarships for Nursing Students</p>
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
