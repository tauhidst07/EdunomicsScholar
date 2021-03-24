import React from "react";
import "../styles/landingpage.css";
import Footer from "./Footer";
import DonerLanding from "./DonerLanding";
import boy from "../media/boy.jpeg";
import girl from "../media/girl.jpg";
import { Link } from "react-router-dom";
// import Select from "react-select";
import edu from "../media/edu.png";

function LandingPage() {
  return (
    <div>
      <nav className="land-head">
        <Link to="/" className="logo" style={{ cursor: "pointer" }}>
          <img src={edu} className="log-pic" alt="logog" />
        </Link>
        <div className="btn">
          {/* <Select className="bt1" /> */}
          <select className="bt1-drop" value="Company">
            <option value="Orange">Company</option>
            <option value="Radish">Contact Us</option>
            <option value="Cherry">Careers</option>
          </select>
          {/* <div className="container">
            <button className="button">Company</button>
            <div class="dropdown">
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            </div>
          </div> */}
          <Link to="/login" className="bt2">
            Login
          </Link>
        </div>
      </nav>
      <div className="main">
        <div className="hero">
          <h1 className="heading">Fighting Student Debt</h1>
          <p className="sub-head">
            Create or apply to exclusive scholarships, fellowships, and grants,
            in minutes.
          </p>
          <DonerLanding />
        </div>
      </div>
      <div className="mid">
        <div className="edu">
          <h1 className="edu-head">Education Drives Opportunity</h1>
          <p className="edu-p">
            But access to quality, affordable education is not equal. The
            average college graduate is $30,000+ in debt. They’re less likely to
            start businesses, pursue dream careers, buy homes, and more.
          </p>
          <Link to="/donergrant">
            <button className="bt0">Edunomics Donors</button>
          </Link>
          <Link to="appligrant">
            <button className="bt0">Edunomics Applicant</button>
          </Link>
        </div>
      </div>
      <div className="lady-1">
        <div className="b1">
          <img className="im1" src={boy} alt="st" />
          <div className="text1">
            <h1 className="un-head">
              Unlocking Impact Through Targeted Scholarships, Grants and
              Fellowships
            </h1>
            <p className="un-p">
              On Bold.org, anyone and any company can create targeted funds that
              enable incredible people to reach their full potential.
            </p>
          </div>
        </div>
      </div>
      <div className="lady-1">
        <div className="b1">
          <div className="text1" style={{ marginRight: "2rem" }}>
            <h1 className="un-head">
              Unlocking Impact Through Targeted Scholarships, Grants and
              Fellowships
            </h1>
            <p className="un-p">
              On Bold.org, anyone and any company can create targeted funds that
              enable incredible people to reach their full potential.
            </p>
          </div>
          <img className="im1" src={girl} alt="st" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
