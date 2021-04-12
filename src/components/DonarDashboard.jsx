import React, { useState, useEffect } from "react";
import axios from "axios";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Footer from "./Footer";
import logo from "../media/edu.png";
import "../styles/donardash.css";
import boy from "../media/boy.jpeg";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import jwt from 'jsonwebtoken';


function DonarDashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {

    let encodedToken = localStorage.getItem("auth-token");

    let myId = jwt.decode(encodedToken)
    //console.log(myId);
    //606ac845c5d23600159eaf4a
    axios
      .get(
        `https://bckendapi.herokuapp.com/api/donar/donarDashboard/${myId._id}`
      )
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
            <a href="/donar-dash" className="activeRoute">
              Dashboard
            </a>
          </li>

          <li className="scholerships">
            <a href="/all-scholar"> All Scholarships</a>
          </li>

          <li className="inviteFrineds">
            <a href="/invite-applicant">Invite Applicants</a>
          </li>
          <li className="leaders">
            <a href="/doner-leaders">Leaders</a>
          </li>
        </ul>
        <div className="dashboardHeader__menu">
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
      <div className="donar-dashhead">
        <h1> Welcome Back, {data.name}!</h1>
        <div className="donar-sidehead">
          <p>
            Total Donations
            <br />
            <br />
            <span>$0</span>
          </p>
          <p>
            Scholarship Applicants
            <br />
            <br />
            <span>$0</span>
          </p>
        </div>
      </div>
      <div className="donar-award">
        <div className="donar-aw-head">
          <div className="head-d">
            <h1>Donor Credits can increase the value of your awards</h1>
            <p>
              We share your scholarships with schools across the country. You
              get Donor Credits whenever students join Edunomics for your awards.
              Use them to create new awards or increase the value of your
              current awards, on us.
            </p>
          </div>

          <div className="credits">
            <h2>Your Donor Credits</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="14" fill="#1A0359"></rect>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.9991 14.0005C20.9991 10.5632 18.2143 7.77832 14.7769 7.77832H8.55469V20.2228H14.7769C18.2143 20.2228 20.9991 17.4379 20.9991 14.0005Z"
                  fill="white"
                ></path>
              </svg>
              <p className="curr" style={{ marginLeft: "1rem" }}>
                {data.creadit}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="your-s">
        <h1>
          Your Scholarships<span> 0</span>
        </h1>

        <Link to={"/create-scholar"} className="create-schoolarship">

          <AddIcon /> Create new scholarship
        </Link>


      </div>
      <div className="sc-box">
        <img src={boy} style={{ marginLeft: "2rem" }} alt="st" />
        <div className="sc-head" style={{ marginLeft: "10rem" }}>
          <h3>We're reviewing your recent submission</h3>
          <span>We'll have a proposal ready for you shortly!</span>
          <p>To request any edits, email Edunomics.in</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DonarDashboard;
