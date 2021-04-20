import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../media/edu.png";
import Footer from "./Footer";
import profileImage from "../media/profile.png";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import jwt from "jsonwebtoken";
// import Loader from "./Loader"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "../styles/donerprofile.css";

function DonerProfile() {
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
    let encodedToken = localStorage.getItem("auth-token");

    let myId = jwt.decode(encodedToken);
    console.log(myId);
    axios
      .get(`https://bckendapi.herokuapp.com/api/donar/donarprofile/${myId._id}`)
      .then((res) => {
        console.log(res);

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
          <Link
            to="/donar-dash"
            className="logo-main"
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="edu logo" />
          </Link>
        </div>
        <ul className="dashboardHeader__routes">
          <li className="dashboard">
            <a href="/donar-dash">Dashboard</a>
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
      {loading ? (
        <Loader
          type="ThreeDots"
          marginLeft="5rem"
          color="grey"
          height={100}
          width={100}
        />
      ) : (
        <div>
          <div className="pro-doner">
            <h1>Donor Profile: {data.name}</h1>
            <p>Scholarships, grants, and award winners for {data.name}</p>
          </div>

          <div className="img-boxx" style={{ marginBottom: "4rem" }}>
            <img className="pro-imgd" src={profileImage} alt="profile" />
            <h1>{data.name}</h1>
            <p>Edit</p>
          </div>
          <div className="mission">
            <h1>Mission</h1>
            <button>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M10.625 4.37499L2.625 12.375L1.5 16.5L5.625 15.375L13.5 7.5M10.625 4.37499L12.75 2.24998C12.947 2.053 13.1808 1.89674 13.4382 1.79014C13.6956 1.68353 13.9714 1.62866 14.25 1.62866C14.5286 1.62866 14.8044 1.68353 15.0618 1.79014C15.3192 1.89674 15.553 2.053 15.75 2.24998C15.947 2.44697 16.1032 2.68082 16.2098 2.93819C16.3164 3.19556 16.3713 3.47141 16.3713 3.74998C16.3713 4.02856 16.3164 4.30441 16.2098 4.56178C16.1032 4.81915 15.947 5.053 15.75 5.24998L13.5 7.5M10.625 4.37499L13.5 7.5"
                  stroke="#CCD1D9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <p>hhf</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default DonerProfile;
