import React, { useState, useEffect } from "react";
import logo from "../../media/edu.png";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "../../styles/moreaboutdoner.css";
import PersonIcon from "@material-ui/icons/Person";
import Footer from "../Footer";
import scholar from "../../media/schola.jpeg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {useParams} from 'react-router-dom';
import DashboardHeader from '../DashboardHeader';

function MoreAboutApplicant() {

  const [status, setStatus] = useState('submitted');

  useEffect(() => {
    console.log(status);

  },[status]);





  return (
    <div>
      <DashboardHeader />
      <div className="more-donar">
        <h1>Applicant Profile: Applicant Name</h1>
        <p>
          Applicant Bio here
        </p>
      </div>
      <div className="don-details">
        <div className="doner-det">
          <img src={scholar} alt="" />
          <h1>
            Applicant Name
          </h1>
          <h4 style={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon />
            N/A
          </h4>
          <p>Date Joined</p>
        </div>
        <div className="doner-right">
          <div className="doner-three">
            <div className="part1">
              <h1>B.Tech</h1>
              <p>Higher Qualifications</p>
            </div>
            <div className="part1">
              <h1>Date</h1>
              <p>Joined Edunomics.in</p>
            </div>
          </div>
          <div className="bot-doner">
            <h1>Essay topic</h1>
            <p>
              Essay body
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </p>

          </div>
          <div className="changeStatus">
            <select className="f-btn1" onChange={(e) => {setStatus(e.target.value)}}>
              <option value="submitted">submitted</option>
              <option value="review">review</option>
              <option value="rejected">rejected</option>
              <option value="accepted">accepted</option>
              <option value="winner">winner</option>

            </select>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default MoreAboutApplicant;
