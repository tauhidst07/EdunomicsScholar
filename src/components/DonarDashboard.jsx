import React, { useState, useEffect } from "react";
import axios from "axios";

import Footer from "./Footer";
import logo from "../media/edu.png";
import "../styles/donardash.css";
import boy from "../media/boy.jpeg";

function DonarDashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://bckendapi.herokuapp.com/api/donar/donarDashboard/606ac845c5d23600159eaf4a"
      )
      .then((res) => {
        console.log(res.data);

        setLoading(false);
        setData(res.data);
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
    <div>
      <div className="dashboardHeader">
        <div className="dashboardHeader__logo">
          <img src={logo} alt="edu logo" />
        </div>
        <ul className="dashboardHeader__routes">
          <li className="dashboard">
            <a href="/" className="activeRoute">
              Dashboard
            </a>
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
      <div className="donar-dashhead">
        <h1> Welcome Back, {data.name}</h1>
        <div className="donar-sidehead">
          <p>
            Total Donations
            <br />
            <br />
            <span>$0</span>
          </p>
          <p>
            Scholarship Applicants
            <br />
            <br />
            <span>$0</span>
          </p>
        </div>
      </div>
      <div className="donar-award">
        <div className="donar-aw-head">
          <div className="head-d">
            <h1>Donor Credits can increase the value of your awards</h1>
            <p>
              We share your scholarships with schools across the country. You
              get Donor Credits whenever students join Bold.org for your awards.
              Use them to create new awards or increase the value of your
              current awards, on us.
            </p>
          </div>

          <div className="credits">
            <h2>Your Donor Credits</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="14" fill="#1A0359"></rect>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.9991 14.0005C20.9991 10.5632 18.2143 7.77832 14.7769 7.77832H8.55469V20.2228H14.7769C18.2143 20.2228 20.9991 17.4379 20.9991 14.0005Z"
                  fill="white"
                ></path>
              </svg>
              <p className="curr" style={{ marginLeft: "1rem" }}>
                {data.creadit}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="your-s">
        <h1>
          Your Scholarships<span> 0</span>
        </h1>
        <button>Create new scholarship</button>
      </div>
      <div className="sc-box">
        <img src={boy} style={{ marginLeft: "2rem" }} alt="st" />
        <div className="sc-head" style={{ marginLeft: "10rem" }}>
          <h3>We're reviewing your recent submission</h3>
          <span>We'll have a proposal ready for you shortly!</span>
          <p>To request any edits, email</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DonarDashboard;
