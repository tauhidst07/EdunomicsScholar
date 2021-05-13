import React, { useState, useEffect } from "react";
import logo from "../../media/edu.png";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "../../styles/moreaboutdoner.css";
import PersonIcon from "@material-ui/icons/Person";
import Footer from "../Footer";
import scholar from "../../media/schola.jpeg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useParams, Link } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import {
  getOneSCholAppli,
  updateScholarStatus,
} from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

function MoreAboutApplicant() {
  const { loader, appliedScholAppli, editSchol } = useSelector(
    (state) => state.auth
  );
  console.log(editSchol);

  const [status, setStatus] = useState("submitted");
  const [anchorEl, setAnchorEl] = useState(null);

  const { appliId, scholarId, appliedId } = useParams();

  const dispatch = useDispatch();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();

  //   let myId = jwt.decode(encodedToken);
  useEffect(() => {
    dispatch(getOneSCholAppli(scholarId));

    dispatch(updateScholarStatus(scholarId, appliedId, status));
  }, [status]);

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
      <div className="more-donar">
        <h1>
          Applicant Profile:
          {
            //console.log(appliedScholAppli, 'ejdkej')
            appliedScholAppli?.applicants?.applicants.map(
              (e) => (e.applicant._id === appliId ? e.applicant.name : "")
              //console.log(e.applicant)
            )
          }
        </h1>
        <p>Applicant Bio here</p>
      </div>
      <div className="don-details">
        <div className="doner-det">
          <img src={scholar} alt="" />
          <h1>
            {" "}
            {
              //console.log(e, 'ejdkej')
              appliedScholAppli?.applicants?.applicants.map(
                (e) => (e.applicant._id === appliId ? e.applicant.name : "")
                //console.log(e.applicant)
              )
            }
          </h1>
          <h4 style={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon />
            N/A
          </h4>
          <p>Date Joined</p>
        </div>
        <div className="doner-right">
          <div className="doner-three">
            <div className="part1">
              <h1>B.Tech</h1>
              <p>Higher Qualifications</p>
            </div>
            <div className="part1">
              <h1>Date</h1>
              <p>Joined Edunomics.in</p>
            </div>
          </div>
          <div className="bot-doner">
            <h1>Essay topic</h1>
            <p>
              Essay body Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
          <div className="changeStatus">
            <select
              className="f-btn1"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              value={status}
            >
              <option value="submitted">submitted</option>
              <option value="review">review</option>
              <option value="rejected">rejected</option>
              <option value="accepted">accepted</option>
              <option value="winner">winner</option>
            </select>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MoreAboutApplicant;
