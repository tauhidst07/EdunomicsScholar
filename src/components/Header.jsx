import React, { useState } from "react";
import "../styles/header.css";
import { Link, useHistory } from "react-router-dom";
import edu from "../media/edu.png";
import { Menu, MenuItem, Button } from "@material-ui/core";

function Header({ isDoner, isApplicant, isActive, isappliactive }) {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClickCompany = (e) => {
    setAnchorE2(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseCompany = () => {
    setAnchorE2(null);
  };
  return (
    <div className="main-header">
      <nav className="naav">
        <Link to="/" className="logo-main" style={{ cursor: "pointer" }}>
          <img className="log-pic" src={edu} alt="logo" />
        </Link>
        <div className="tog">
          <Link
            to="/donergrant"
            className={`tg1 ${isDoner || isActive ? "activeRoute" : ""}`}
          >
            Donors
          </Link>
          <Link
            to="/appligrant"
            className={`tg1 ${
              isApplicant || isappliactive ? "activeRoute" : ""
            }`}
          >
            Applicants
          </Link>
        </div>
        <div className="btn">
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
            How It Works
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
                history.push("/how-it-works");
              }}
            >
              How It Works
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                history.push("/doner-credits");
              }}
            >
              Doner credits
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                history.push("/award");
              }}
            >
              Award Features
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                history.push("/pricing");
              }}
            >
              Pricing
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                history.push("/faq");
              }}
            >
              FAQ
            </MenuItem>
          </Menu>

          <button className="bt11">View Scholarships</button>
          <Link>
            <button className="bt11">Leaders</button>
          </Link>
          <div className="btn">
            <Button
              style={{
                fontSize: "14px",
                color: "#0b233f",
                fontWeight: 900,
                textTransform: "none",
              }}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClickCompany}
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
          </div>
          <Menu
            className="company-menu"
            id="simple-menu"
            anchorE2={anchorE2}
            keepMounted
            open={Boolean(anchorE2)}
            onClose={handleCloseCompany}
          >
            <MenuItem
              onClick={() => {
                handleCloseCompany();
                history.push("/about");
              }}
            >
              About Us
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseCompany();
                history.push("/contactus");
              }}
            >
              Contact Us
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseCompany();
                history.push("/careers");
              }}
            >
              Careers
            </MenuItem>
          </Menu>
          <Link to="/login" className="bt22-1">
            Login
          </Link>
          {/* <button className="bt22-1">Login</button> */}
          <Link to="/signup" className="bt22-2">
            Join pride.edunomics.in
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
