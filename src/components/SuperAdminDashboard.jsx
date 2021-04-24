import React from "react";
import "../styles/superadmdash.css";
import gir from "../media/gir.jpeg";

import logo from "../media/edu.png";
import { Link, useHistory } from "react-router-dom";

function SuperAdminDashboard() {
  return (
    <div className="super-all">
      <div className="sidebar">
        <div className="sidebar-brand dashboardHeader__logo">
          <Link
            to="/dashboard"
            className="logo-main"
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="edu logo" />
          </Link>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="">
                <span className="las la-igloo"></span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-users"></span>
                <span>Doners</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-clipboard-list"></span>
                <span>Applicants</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-user-circle"></span>
                <span>About me</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <header>
          <h1>
            <label for="">
              <span
                className="las la-bars"
                style={{ marginRight: ".4rem" }}
              ></span>
            </label>
            Dashboard
          </h1>
          <div className="search-wrapper">
            <span className="las la-search"></span>
            <input type="search" placeholder="Search here" />
          </div>
          <div className="user-wrapper">
            <img src={gir} style={{ width: "40px", height: "30px" }} alt="" />

            <div>
              <h1>Rakesh</h1>
              <small>Super Admin</small>
            </div>
          </div>
        </header>
        <main>
          <div className="cards">
            <div className="cards-single">
              <div className="in-card">
                <h1>54</h1>
                <span>doners</span>
              </div>
              <div className="in-ic">
                <span className="las la-users"></span>
              </div>
            </div>
            <div className="cards-single">
              <div className="in-card">
                <h1>54</h1>
                <span>doners</span>
              </div>
              <div className="in-ic">
                <span className="las la-clipboard-list"></span>
              </div>
            </div>
            <div className="cards-single">
              <div className="in-card">
                <h1>54</h1>
                <span>doners</span>
              </div>
              <div className="in-ic">
                <span className="las la-user-circle"></span>
              </div>
            </div>
            <div className="cards-single">
              <div className="in-card">
                <h1>$54</h1>
                <span>doners</span>
              </div>
              <div className="in-ic">
                <span className="las la-users"></span>
              </div>
            </div>
          </div>
          <div className="recent-grid">
            <div className="projects">
              <div className="card">
                <div className="card-header"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SuperAdminDashboard;
// /api/donar/allAppliedApplicants/applicantID
