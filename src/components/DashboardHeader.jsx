import React, { useState } from "react";
import "../styles/dashboardHeader.css";
import logo from '../media/edu.png';
import { Link, useHistory } from "react-router-dom";

function DashboardHeader({myapplication, isActive}) {
  console.log(myapplication)
  const [collapse, setCollapse] = useState(false);
  
  return (
    <div className="dashboardHeader">
      <div className="dashboardHeader__logo"> <Link to="/dashboard" className="logo-main" style={{ cursor: "pointer" }}>
            <img src={logo} alt="edu logo" />

          
          </Link></div>
        <ul className={collapse ? " dashboardHeader__routes hide" : "dashboardHeader__routes"}>
          <li className="dashboard"><a href="/dashboard" className={`dashboard ${!isActive ? "activeRoute":""}`}>Dashboard</a></li>
         
          <li    ><a href="/all-apli-scholarships" className={`scholerships ${isActive ? "activeRoute":""}`}>Scholarships</a></li>
          <li className="myapplicants"><a href={myapplication}>My Applicants</a></li>
          <li className="inviteFrineds"><a href="/">Invite Friends</a></li>
          <li className="leaders"><a href="/leaders">Leaders</a></li>
          <li className="search">
            <input type="text" placeholder="Search students" />
          </li>
        </ul>
      <div className="dashboardHeader__menu"><button className="collaps-btn" onClick={() => setCollapse(!collapse)}>collapse</button></div>
    </div>
  );
}

export default DashboardHeader;
