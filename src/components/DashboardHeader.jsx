import React from "react";
import "../styles/dashboardHeader.css";
import logo from '../media/edu.png';

function DashboardHeader() {
  return (
    <div className="dashboardHeader">
      <div className="dashboardHeader__logo"><img src={logo} alt="edu logo" /></div>
        <ul className="dashboardHeader__routes">
          <li className="dashboard"><a href="/" className="activeRoute">Dashboard</a></li>
          <li className="loanHelp"><a href="/">Loan Help</a></li>
          <li className="resources"><a href="/">Resources</a></li>
          <li className="scholerships"><a href="/">Scholerships</a></li>
          <li className="myapplicants"><a href="/">My Applicants</a></li>
          <li className="inviteFrineds"><a href="/">Invite Friends</a></li>
          <li className="leaders"><a href="/">Leaders</a></li>
          <li className="search">
            <input type="text" placeholder="Search students" />
          </li>
        </ul>
      <div className="dashboardHeader__menu"></div>
    </div>
  );
}

export default DashboardHeader;
