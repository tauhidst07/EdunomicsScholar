import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../media/edu.png";
import PersonIcon from "@material-ui/icons/Person";
import jwt from "jsonwebtoken";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { Link, useHistory, useParams } from "react-router-dom";
import Footer from "../Footer";
import "../../styles/MyApplication.css";
import img from "../../media/scholar-img.jpeg";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import RedeemIcon from "@material-ui/icons/Redeem";
import Loader from "react-loader-spinner";
import { getOneSCholAppli } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const AppliedApplicants = () => {
  const [id] = useParams();
  const { loader, appliedScholAppli } = useSelector((state) => state.auth);
  console.log(appliedScholAppli);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  // const [data, setData] = useState([]);
  // const [data2, setData2] = useState([]);
  // const [count, setCount] = useState();

  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    let encodedToken = localStorage.getItem("token");

    let myId = jwt.decode(encodedToken);
    // console.log(myId);
    dispatch(getOneSCholAppli(id));

    //606ac845c5d23600159eaf4a
    // axios
    //   .get(
    //     `https://bckendapi.herokuapp.com/api/donar/oneScholarship/${myId._id}`
    //   )
    //   .then((res) => {
    //     console.log(res);

    //     setLoading(false);
    //     setData(res.data);
    //     setError("");
    //   });

    // my scholar

    // axios.get(
    //   `https://bckendapi.herokuapp.com/api/donar/myScholarships/${myId._id}`
    // ).then((res)=>{
    //   console.log(res.data);
    //   setData2(res.data.scholarships)
    //   setCount(res.data.count)

    // })

    //       .catch((err) => {
    //         setLoading(false);
    //         setData({});
    //         setError("error is there");
    //         console.log(error);
    //       });
  }, []);

  return (
    <div>
      <div className="dashboardHeader">
        <div className="dashboardHeader__logo">
          <Link
            to="/donar-dash"
            className="logo-main"
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="edu logo" />
          </Link>
        </div>
        <ul className="dashboardHeader__routes">
          <li className="dashboard">
            <a href="/donar-dash" className="activeRoute">
              Dashboard
            </a>
          </li>

          <li className="scholerships">
            <a href="/all-scholar"> All Scholarships</a>
          </li>

          <li className="inviteFrineds">
            <a href="/invite-applicant">Invite Applicants</a>
          </li>
          <li className="leaders">
            <a href="/doner-leaders">Leaders</a>
          </li>
        </ul>
        <div className="dashboardHeader__menu">
          <div className="btn">
            <Button
              style={{
                fontSize: "14px",
                color: "#0b233f",
                fontWeight: 900,
                textTransform: "none",
              }}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <PersonIcon />
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M5.28769 7.71231C5.58058 7.41942 6.05546 7.41942 6.34835 7.71231L9.53033 10.8943C9.82322 11.1872 9.82322 11.6621 9.53033 11.955C9.23744 12.2478 8.76256 12.2478 8.46967 11.955L5.28769 8.77297C4.9948 8.48008 4.9948 8.0052 5.28769 7.71231Z"
                  fill="#5D57FB"
                ></path>
                <path
                  d="M12.7123 7.71231C13.0052 8.0052 13.0052 8.48008 12.7123 8.77297L9.53033 11.955C9.23744 12.2478 8.76256 12.2478 8.46967 11.955C8.17678 11.6621 8.17678 11.1872 8.46967 10.8943L11.6517 7.71231C11.9445 7.41942 12.4194 7.41942 12.7123 7.71231Z"
                  fill="#5D57FB"
                ></path>
              </svg>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  history.push("/donar-profile");
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  history.push("/settings-donar");
                }}
              >
                Setting
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  localStorage.clear();

                  history.push("/login");
                }}
              >
                Sign out
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div className="myApplication">
        {loader ? (
          <div style={{ textAlign: "center", alignItems: "center" }}>
            <Loader type="ThreeDots" color="grey" height={100} width={100} />
          </div>
        ) : (
          <div className="myApplication__main">
            <h1>
              Applicants ({getOneSCholAppli?.scholarships?.applicants?.length})
            </h1>

            <div className="myApplication__main__scholarships">
              <div className="myApplication__main__scholarships_Container">
                <a href="/">
                  <img width="120px" height="80px" src={img} />

                  <div className="myApplication__main__scholarships_ContainerContent">
                    <div className="myApplication__title">Applicant Name</div>
                    <ul className="myscholarship__details">
                      <li>
                        <div>
                          <AccessTimeIcon />
                        </div>
                        <div>
                          <div>Status</div>
                          <div>Applied</div>
                        </div>
                      </li>

                      <li>
                        <div>
                          <RedeemIcon />
                        </div>
                        <div>
                          <div>Rank</div>
                          <div>N/A</div>
                        </div>
                      </li>

                      <li>
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M3.75 5C3.75 4.86193 3.86193 4.75 4 4.75H23C23.1381 4.75 23.25 4.86193 23.25 5V16C23.25 16.1381 23.1381 16.25 23 16.25H4C3.86193 16.25 3.75 16.1381 3.75 16V5Z"
                                fill="white"
                                stroke="#9597A6"
                                stroke-width="1.5"
                              ></path>
                              <path
                                d="M17.25 10.5C17.25 12.0188 16.0188 13.25 14.5 13.25C12.9812 13.25 11.75 12.0188 11.75 10.5C11.75 8.98122 12.9812 7.75 14.5 7.75C16.0188 7.75 17.25 8.98122 17.25 10.5Z"
                                fill="white"
                                stroke="#9597A6"
                                stroke-width="1.5"
                              ></path>
                              <path
                                d="M0.75 8C0.75 7.86193 0.861929 7.75 1 7.75H20C20.1381 7.75 20.25 7.86193 20.25 8V19C20.25 19.1381 20.1381 19.25 20 19.25H1C0.861929 19.25 0.75 19.1381 0.75 19V8Z"
                                fill="white"
                                stroke="#9597A6"
                                stroke-width="1.5"
                              ></path>
                              <path
                                d="M13.25 13.5C13.25 15.0188 12.0188 16.25 10.5 16.25C8.98122 16.25 7.75 15.0188 7.75 13.5C7.75 11.9812 8.98122 10.75 10.5 10.75C12.0188 10.75 13.25 11.9812 13.25 13.5Z"
                                fill="white"
                                stroke="#9597A6"
                                stroke-width="1.5"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <path d="M0 0H24V24H0V0Z" fill="white"></path>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div>
                          <div>Applied On</div>
                          <div>22 - july - 2021</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </a>

                <div className="finishApplicationBtn">
                  <button>
                    View Application
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M6.75 13.5L11.25 9L6.75 4.5"
                        stroke="#ACB4BF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AppliedApplicants;
