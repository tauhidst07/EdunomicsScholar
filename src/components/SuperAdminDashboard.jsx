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
                <div className="card-header">
                  <h1>Scholarships</h1>
                  {/* <button>
                    see all<span className="las la-arrrow-right"></span>
                  </button> */}
                </div>
                <div className="card-body">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Scholarship Name</td>
                        <td>Award</td>
                        <td>Status</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Edunomics</td>
                        <td>$500</td>
                        <td>
                          <span className="status"></span>pending
                        </td>
                      </tr>
                      <tr>
                        <td>Tophire</td>
                        <td>$100</td>
                        <td>
                          <span className="status"></span>done
                        </td>
                      </tr>
                      <tr>
                        <td>Howard</td>
                        <td>$100</td>
                        <td>
                          <span className="status"></span>pending
                        </td>
                      </tr>
                      <tr>
                        <td>Nit</td>
                        <td>$40</td>
                        <td>
                          <span className="status"></span>begin
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <div className="customer">
              <div className="card">
                <div className="card-header">
                  <h1>new customer</h1>
                  <button>
                    see all<span className="las la-arrrow-right"></span>
                  </button>
                </div>
                <div className="card-body">
                  <div className="customer">
                    <div>
                      <img src={gir} width="40px" height="30px" alt="" />
                      <div>
                        <h4>hello its me</h4>
                        <small>jjjgjg</small>
                      </div>
                    </div>
                    <span className="las la-user-circle"></span>
                    <span className="las la-comment"></span>
                    <span className="las la-phone"></span>
                  </div>
                  <div className="customer">
                    <div>
                      <img src={gir} width="40px" height="30px" alt="" />
                      <div>
                        <h4>hello its me</h4>
                        <small>jjjgjg</small>
                      </div>
                    </div>
                    <span className="las la-user-circle"></span>
                    <span className="las la-comment"></span>
                    <span className="las la-phone"></span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default SuperAdminDashboard;
// /api/donar/allAppliedApplicants/applicantID
