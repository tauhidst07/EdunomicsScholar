import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import Points from "./Points";
import Footer from "./Footer";
import axios from "axios";
import profile from "../media/profile.png";
import jwt from 'jsonwebtoken';

import "../styles/dashboard.css";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  


  useEffect(() => {
    let encodedToken = localStorage.getItem("auth-token");

    let myId = jwt.decode(encodedToken)
    console.log(myId)
    axios
      .get(
        `https://bckendapi.herokuapp.com/api/user/dashboard/${myId._id}`
      )
      .then((res) => {
        console.log(res);

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
    <div className="dashboard">
      <DashboardHeader />
      <div className="dashboard__body">
        <div className="userInfo">
          <div className="left">
            <div>
              <img
                className="profileImg"
                src={profile}
                alt="profile"
                width="70"
              />
              <h1 className="userInfo__name">Hey, {data.name}!</h1>
              <div className="userInfo__points">{data.points}</div>
            </div>
            <div className="userEarningPoints">
              <a href="/">
                <img
                  alt="earning points"
                  src="https://bld-schl-pcs.s3.us-east-2.amazonaws.com/bold-scholarship-300.jpeg"
                />
              </a>
              <div>
                <div>
                  Earn
                  <span>50</span> more Bold Points to unlock
                  <br /> a new $2,000 scholarship
                </div>

                <div class="userPointsProgress">
                  <div className="userPointsProgress__container">
                    <div>
                      <span></span>
                    </div>
                    <div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.857 2.85764V0.000488281H7.14269V2.85764C7.14269 4.43603 8.42249 5.7148 9.99985 5.7148C11.5782 5.7148 12.857 4.43603 12.857 2.85764Z"
                          fill="#5D57FB"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.2855 0.000488281V2.85764C14.2855 4.435 15.5643 5.7148 17.1427 5.7148H19.9998V0.000488281H14.2855Z"
                          fill="#5D57FB"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.71431 2.85716V0H0V5.71431H2.85716C4.43554 5.71431 5.71431 4.43554 5.71431 2.85716Z"
                          fill="#5D57FB"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.71431 10.0007C5.71431 8.42233 4.43554 7.14355 2.85716 7.14355H0V12.8579H2.85716C4.43554 12.8579 5.71431 11.5791 5.71431 10.0007Z"
                          fill="#5D57FB"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.9996 14.2861H17.1424C15.5651 14.2861 14.2853 15.5649 14.2853 17.1433V20.0004H19.9996V14.2861Z"
                          fill="#5D57FB"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.857 10.0007C12.857 8.42233 11.5782 7.14355 9.99985 7.14355C8.42249 7.14355 7.14269 8.42233 7.14269 10.0007C7.14269 11.5791 8.42249 12.8579 9.99985 12.8579C11.5782 12.8579 12.857 11.5791 12.857 10.0007Z"
                          fill="#5D57FB"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.99998 14.2861C8.4216 14.2861 7.14283 15.5649 7.14283 17.1433V20.0004H12.8571V17.1433C12.8571 15.5649 11.5784 14.2861 9.99998 14.2861Z"
                          fill="#5D57FB"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.85729 14.2861H0.000133514V20.0004H5.71445V17.1433C5.71445 15.5649 4.43568 14.2861 2.85729 14.2861Z"
                          fill="#5D57FB"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.1425 7.14355C15.5642 7.14355 14.2854 8.42233 14.2854 10.0007C14.2854 11.5781 15.5642 12.8579 17.1425 12.8579H19.9997V7.14355H17.1425Z"
                          fill="#5D57FB"
                        ></path>
                      </svg>
                      {data.points}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="userEarningPoints__more">
                    <img
                      src="https://bld-schl-pcs.s3.us-east-2.amazonaws.com/bold-scholarship-300.jpeg"
                      alt="img"
                    />
                    <img
                      src="https://bld-schl-pcs.s3.us-east-2.amazonaws.com/bold-scholarship-400.jpeg"
                      alt="img"
                    />
                    <img
                      src="https://bld-schl-pcs.s3.us-east-2.amazonaws.com/bold-scholarship-500.jpeg"
                      alt="img"
                    />
                    <img
                      src="https://bld-schl-pcs.s3.us-east-2.amazonaws.com/bold-scholarship-1000.jpeg"
                      alt="img"
                    />
                    <span>You have 4 more scholarships to unlock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="myApplications">
              <ul>
                <li>
                  <div style={{marginBottom:".6rem"}}>My Applications</div>
                  <div>All your applications in one place</div>
                </li>
                <li>
                  <div style={{marginBottom:".6rem"}}>Invite a friend 100</div>
                  <div>You've invited 0 friends so far</div>
                </li>
              </ul>

              <ul>
                <span >MY STATS</span>
                <li>
                  <div style={{marginTop:".6rem"}}>Nomination given</div>
                  <div>0</div>
                </li>
                <li>
                  <div>Nomination recived</div>
                  <div>0</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="earnablePoints">
          <h3>EARN BOLD POINTS</h3>
          <h1>Increase Your Chances of Winning</h1>
          <div>
            <Points />
            <Points />
            <Points />
            <Points />
            <Points />
            <Points />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
