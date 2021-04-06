import React from "react";

function DonerProfile() {
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
            <a href="/"> All Scholerships</a>
          </li>

          <li className="inviteFrineds">
            <a href="/">Invite Applicants</a>
          </li>
          <li className="leaders">
            <a href="/leaders">Leaders</a>
          </li>
        </ul>
        <div className="dashboardHeader__menu"></div>
      </div>
    </div>
  );
}

export default DonerProfile;
