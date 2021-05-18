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
          <h2 className="rights"> All Rights Reserved <span style={{fontWeight:700}}>pride.edunomics.in</span></h2>
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
          <h1 className="doner">DONORS<div className="bottomBorder"></div></h1>
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
          <h1 className="doner">Applicants<div className="bottomBorder"></div></h1>
          <Link to="/r-report">
            <p>Research Reports</p>
          </Link>
          <Link to="/scholar-rules">
            <p>Scholarship Rules </p>
          </Link>
          <Link to="/easy-scholar">
            <p>Easy Scholarships</p>
          </Link>
          <Link to="/scholar-women">
            <p>Scholarships for Women</p>
          </Link>
          <Link to="/scholar-women">
            <p>Training</p>
          </Link>
         
        </div>
        <div className="down3">
          <h1 className="doner">Company<div className="bottomBorder"></div></h1>
          <Link to="about">
            <p>About Us</p>
          </Link>
          <Link to="/contactus">
            <p>Contact Us </p>
          </Link>
          <Link to="/careers">
            <p>Careers</p>
          </Link>
          <Link to="/privacy">
            <p>Privacy Policy</p>
          </Link>
          <Link to="/terms">
            <p>Terms of Use</p>
          </Link>
          <Link to="/press">
            <p>Press Center</p>
          </Link>
          <Link to="enroll">
            <p>Enrollment Solutions</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
