import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import logo from "../media/edu.png";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { useHistory,Link } from "react-router-dom";
import "../styles/invite.css";
import PersonIcon from "@material-ui/icons/Person";

function InviteApplicants() {
  const [data, setData] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // useEffect(() => {
  //   async function fetchMyApi() {
  //     let response = await fetch(
  //       "https://bckendapi.herokuapp.com/api/donar/oneScholarship/606d46deb66b0512f914ac39"
  //     );
  //     response = await response.json();
  //     setData([response]);
  //     console.log(response);
  //   }
  //   fetchMyApi();
  // }, []);
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  return (
    <div>
      <div className="dashboardHeader">
        <div className="dashboardHeader__logo">
        <Link to="/donar-dash" className="logo-main" style={{ cursor: "pointer" }}>
            <img src={logo} alt="edu logo" />

          
          </Link>
        </div>
        <ul className="dashboardHeader__routes">
          <li className="dashboard">
            <a href="/donar-dash">Dashboard</a>
          </li>

          <li className="scholerships">
            <a href="/all-scholar">All Scholarships</a>
          </li>

          <li className="inviteFrineds">
            <a href="/invite-applicant" className="activeRoute">
              Invite Applicants
            </a>
          </li>
          <li className="leaders">
            <a href="/doner-leaders">Leaders</a>
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
                  history.push("/settings-donar");
                }}
              >
                Setting
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  localStorage.clear();

                  history.push("/login");
                }}
              >
                Sign out
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div className="invite-box">
        <h1>Invite students to your scholarships</h1>
        <input placeholder="Search by name or interests" />
        <div className="invite-options">
          <p>Try:</p>
          <p>Sandra Doe</p>
          <p>Chess</p>
          <p>Public Speaking</p>
          <p>Volunteering</p>
          <p>Cooking</p>
        </div>
        <h2>Filter by :</h2>
      </div>
      <div className="invite-main">
        <div className="invite-left"></div>
        <div className="invite-right"></div>
      </div>
      <Footer />
    </div>
  );
}

export default InviteApplicants;
