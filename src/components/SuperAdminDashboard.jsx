import React, { useState, useEffect } from "react";
import axios from "axios";
import Chat from "./Chat";

import "../styles/superadmdash.css";
import gir from "../media/gir.jpeg";

import logo from "../media/edu.png";
import { Link } from "react-router-dom";

function SuperAdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(0);
  console.log(data);
  useEffect(() => {
    axios
      .get(`https://bckendapi.herokuapp.com/api/admin`)
      .then((res) => {
        console.log(res.data);

        setLoading(false);
        let resData = res.data;
        setData(resData);
        console.log(data);
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
    <div className="super-alls">
      <div className="sidebars">
        <div className="sidebar-brands dashboardHeader__logo">
          <Link
            to="/dashboard"
            className="logo-main"
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="edu logo" />
          </Link>
        </div>
        <div className="sidebar-menus">
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
      <div className="main-contents">
        <header className="supheader">
          <h1 style={{ marginTop: ".4rem", fontWeight: 700, color: "grey" }}>
            Super Admin Dashboard
          </h1>
          <div className="search-wrapper">
            <span className="las la-search"></span>
            <input type="search" placeholder="Search here" />
          </div>
          <div className="user-wrapper">
            <img src={gir} style={{ width: "40px", height: "30px" }} alt="" />

            <div>
              <h1>Rakesh Baghel</h1>
              <small>Super Admin</small>
            </div>
          </div>
        </header>
        <main>
          <div className="cards">
            <div className="cards-single">
              <div className="in-card">
                <h1>{data === 0 ? "" : data.donar.total}</h1>
                <span>doners</span>
              </div>
              <div className="in-ic">
                <span className="las la-users"></span>
              </div>
            </div>
            <div className="cards-single">
              <div className="in-card">
                <h1>{data === 0 ? "" : data.applicant.total}</h1>
                {/* <h1>{data.donar.total}</h1> */}

                <span>Applicants</span>
              </div>
              <div className="in-ic">
                <span className="las la-clipboard-list"></span>
              </div>
            </div>
            <div className="cards-single">
              <div className="in-card">
                <h1>{data === 0 ? "" : data.scholarship.total}</h1>
                <span>Scholarship</span>
              </div>
              <div className="in-ic">
                <span className="las la-user-circle"></span>
              </div>
            </div>
            <div className="cards-single">
              <div className="in-card">
                <h1>{data === 0 ? "" : data.donar.total}</h1>
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
                      {data === 0
                        ? ""
                        : data.scholarship.all.map((e, i) => (
                            <tr>
                              <td key={i}>{e.name}</td>
                              <td>$500</td>
                              <td>
                                <span className="status"></span>pending
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Chat />
    </div>
  );
}

export default SuperAdminDashboard;
// /api/donar/allAppliedApplicants/applicantID
