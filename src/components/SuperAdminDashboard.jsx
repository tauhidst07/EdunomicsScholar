import React from "react";
import "../styles/superadmdash.css";
import logo from "../media/edu.png";

function SuperAdminDashboard() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-brand">
          <Link
            to="/dashboard"
            className="logo-main"
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="edu logo" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuperAdminDashboard;
