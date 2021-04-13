import React, { useState } from "react";
import "../styles/dashboardHeader.css";
import logo from '../media/edu.png';
import { Link, useHistory } from "react-router-dom";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from "@material-ui/icons/Person";
import { Menu, MenuItem, Button } from "@material-ui/core";



function DashboardHeader({myapplication, isActive,islead}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  console.log(myapplication)
  const [collapse, setCollapse] = useState(false);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div className="dashboardHeader">
      <div className="dashboardHeader__logo"> <Link to="/dashboard" className="logo-main" style={{ cursor: "pointer" }}>
            <img src={logo} alt="edu logo" />

          
          </Link></div>
        <ul className={collapse ? " dashboardHeader__routes hide" : "dashboardHeader__routes"}>
          <li className="dashboard"><a href="/dashboard" className={`dashboard ${!isActive &&!islead? "activeRoute":""}`}>Dashboard</a></li>
         
          <li    ><a href="/all-apli-scholarships" className={`scholerships ${isActive ? "activeRoute":""}`}>Scholarships</a></li>
          <li className="myapplicants"><a href={myapplication}>My Applicants</a></li>
          <li className="inviteFrineds"><a href="/">Invite Friends</a></li>
          <li className="leaders"><a href="/apli-leaders" className={`leaders ${islead ? "activeRoute":""}`}>Leaders</a></li>
          <li className="search">
            <input type="text" placeholder="Search students" />
          </li>
          <div className="right-icons">
          < BookmarkIcon />
          <div style={{display:"flex", alignItems:"center" ,marginLeft:"1.5rem"}}>
          <NotificationsIcon/>

          </div>
          </div>
          <div className="dashboardHeader__menu" style={{marginLeft:"1.5rem"}}>
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
                  history.push("/profile");
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  history.push("/settings-appli");
                }}
              >
                Setting
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  localStorage.clear();

                  history.push("/loginApli");
                }}
              >
                Sign out
              </MenuItem>
            </Menu>
          </div>
        </div>
          
        </ul>
      <div className="dashboardHeader__menu"><button className="collaps-btn" onClick={() => setCollapse(!collapse)}>collapse</button></div>
    </div>
  );
}

export default DashboardHeader;
