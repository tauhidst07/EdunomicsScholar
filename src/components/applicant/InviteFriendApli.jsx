import React from "react";
import DashboardHeader from "../DashboardHeader";

import Footer from "../Footer";

function InviteFriendApli() {
  return (
    <div>
      <DashboardHeader inviteactive={true} />
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
        <h1 style={{ textAlign: "center", marginBottom: "5rem" }}>
          COMING SOON......
        </h1>
        {/* <div className="invite-left"></div>
        <div className="invite-right"></div> */}
      </div>
      <Footer />
    </div>
  );
}

export default InviteFriendApli;
