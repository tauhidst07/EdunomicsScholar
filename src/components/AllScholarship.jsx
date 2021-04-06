import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import boy from "../media/boy.jpeg";

import logo from "../media/edu.png";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";

function AllScholarship() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    axios
      .get("https://bckendapi.herokuapp.com/api/donar/allScholarships")
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setData(res.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setData({});
        setError("error is there");
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="dashboardHeader">
        <div className="dashboardHeader__logo">
          <img src={logo} alt="edu logo" />
        </div>
        <ul className="dashboardHeader__routes">
          <li className="dashboard">
            <a href="/">Dashboard</a>
          </li>

          <li className="scholerships">
            <a href="/" className="activeRoute">
              All Scholerships
            </a>
          </li>

          <li className="inviteFrineds">
            <a href="/">Invite Applicants</a>
          </li>
          <li className="leaders">
            <a href="/leaders">Leaders</a>
          </li>
        </ul>
        <div className="dashboardHeader__menu">
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
              <PersonIcon />
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
                  history.push("/donar-profile");
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  history.push("/contactus");
                }}
              >
                Setting
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  history.push("/careers");
                }}
              >
                Sign out
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <h1 style={{ marginTop: "2rem", textAlign: "center" }}>scholarships</h1>
      <div className="sc-box " style={{ boxShadow: "0 8px 6px -6px black" }}>
        <img src={boy} alt="st" />
        <div className="sc-head">
          <h3>Smart Borrower No-Essay Scholarship & Loan Forgiveness Grant</h3>
          <span>Funded by</span>
          <p>
            Become eligible for this scholarship by showcasing that you know how
            to navigate your student loan options.
          </p>
        </div>

        <div className="apply">
          <button className="apply-bt1">View scholarship</button>
          <button className="apply-bt2">Contribute</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllScholarship;
