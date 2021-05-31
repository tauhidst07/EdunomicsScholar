import React, { useState } from "react";
import "../../styles/landingpage.css";
import Footer from "../Footer";
import DonerLanding from "../donar/DonerLanding";
import boy from "../../media/im-220805.jpeg";
import girl from "../../media/indian-students.jpg";
import { Link, useHistory } from "react-router-dom";
import { Menu, MenuItem, Button } from "@material-ui/core";

// import Select from "react-select";
import edu from "../../media/newlogo.png";

function LandingPage() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <nav className="land-head">
        <Link to="/" className="logo" style={{ cursor: "pointer" }}>
          <img
            src={edu}
            className="log-pic"
            alt="logog"
            // style={{ backgroundColor: "white" }}
          />
        </Link>
        <div className="btn">
          {/* <Select className="bt1" /> */}
          <Button
            style={{
              fontSize: "14px",
              color: "#0b233f",
              fontWeight: 900,
              textTransform: "none",
            }}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Company
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M5.28769 7.71231C5.58058 7.41942 6.05546 7.41942 6.34835 7.71231L9.53033 10.8943C9.82322 11.1872 9.82322 11.6621 9.53033 11.955C9.23744 12.2478 8.76256 12.2478 8.46967 11.955L5.28769 8.77297C4.9948 8.48008 4.9948 8.0052 5.28769 7.71231Z"
                fill="#5D57FB"
              ></path>
              <path
                d="M12.7123 7.71231C13.0052 8.0052 13.0052 8.48008 12.7123 8.77297L9.53033 11.955C9.23744 12.2478 8.76256 12.2478 8.46967 11.955C8.17678 11.6621 8.17678 11.1872 8.46967 10.8943L11.6517 7.71231C11.9445 7.41942 12.4194 7.41942 12.7123 7.71231Z"
                fill="#5D57FB"
              ></path>
            </svg>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                history.push("/about");
              }}
            >
              About Us
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                history.push("/contactus");
              }}
            >
              Contact Us
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                history.push("/careers");
              }}
            >
              Careers
            </MenuItem>
          </Menu>

          <Link to="/loginApli" className="bt2">
            Login
          </Link>
        </div>
      </nav>
      <div className="main">
        <div className="hero">
          <h1 className="heading">Democratising education and economy </h1>
          <p className="sub-head">
            Create or apply scholarships, loans, fellowship, mentoring and part
            time jobs with ease
          </p>
          <DonerLanding />
        </div>
      </div>
      <div className="mid">
        <div className="edu">
          <h1 className="edu-head">Education drives growth</h1>
          <p className="edu-p">
            But access to quality and affordable education is a Dream. Average
            College graduate is in debt of 5 Lacs+. They’re less likely to start
            businesses, pursue dream careers, buy homes, and more. And make this
            nation a vibrant economy. Need to unlock this.
          </p>
          <Link to="/donergrant">
            <button className="bt0 ">Edunomics Donors</button>
          </Link>
          <Link to="appligrant">
            <button className="bt0 ">Edunomics Applicant</button>
          </Link>
        </div>
      </div>
      <div className="lady-1" style={{ margin: "1rem" }}>
        <div className="b1">
          <img className="im1 imshaw" src={girl} alt="st" />

          {/* <img className="im1 imshaw" src={boy} alt="st" /> */}
          <div className="text1" style={{ marginLeft: "3.5rem" }}>
            <h1 className="un-head">
              <span style={{ color: "green" }}> Lets bridge the Gap </span>
              and create impact through scholarships, loans, fellowship,
              mentoring and part time jobs
            </h1>
            <p className="un-p">
              On Edunomics, anyone, group or any company can create targeted
              help that enable incredible people to reach their full potential.
            </p>
          </div>
        </div>
      </div>
      <div className="lady-1" style={{ margin: "1rem" }}>
        <div className="b1">
          {/* <img className="im1 imshaw" src={girl} alt="st" /> */}

          <div className="text1" style={{ marginRight: "2rem" }}>
            <h1 className="un-head">
              <span style={{ color: "green" }}> Lets Empower </span>
              and subsidise education for the better economy
            </h1>
            <p className="un-p">
              Our team along with AI based model do the heavy lifting lifting,
              making the review and award process seamless for Donors and
              Applicants. We are in process of getting the tax-deduction
              certificates.
            </p>
          </div>
          <img className="im1 imshaw" src={boy} alt="st" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "4rem",
          }}
        >
          <Link to="/donergrant">
            <button className="bt0 imshaw" style={{ background: "#005d33" }}>
              Edunomics Donors
            </button>
          </Link>
          <Link to="appligrant">
            <button className="bt0 imshaw" style={{ background: "#005d33" }}>
              Edunomics Applicant
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
