import React, { useState, useEffect, useParams } from "react";
import axios from "axios";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Footer from "../Footer";
import logo from "../../media/edu.png";
import "../../styles/donardash.css";
import boy from "../../media/boy.jpeg";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import jwt from "jsonwebtoken";
import img from "../../media/scholar-img.jpeg";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { DonorDASH } from "../redux/actions/authAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function DonarDashboard() {
  const { auth } = useSelector((state) => state);
  console.log({ auth });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [count, setCount] = useState();
  // const {scholarid} = useParams()
  // console.log(scholarid.split('&'))

  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let encodedToken = localStorage.getItem("auth-token");

  let myId = jwt.decode(encodedToken);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log(myId);
    //606ac845c5d23600159eaf4a
    // axios
    //   .get(
    //     `https://bckendapi.herokuapp.com/api/donar/donarDashboard/${myId._id}`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     setLoading(false);
    //     setData(res.data);
    //     setError("");
    //   });
    // // my scholar
    // axios
    //   .get(
    //     `https://bckendapi.herokuapp.com/api/donar/myScholarships/${myId._id}`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     setData2(res.data.scholarships);
    //     setCount(res.data.count);
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     setData({});
    //     setError("error is there");
    //     console.log(error);
    //   });
    dispatch(DonorDASH(data));
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
      {loading ? (
        <div style={{ textAlign: "center", alignItems: "center" }}>
          <Loader type="ThreeDots" color="grey" height={100} width={100} />
        </div>
      ) : (
        <div>
          <div className="donar-dashhead">
            <h1> Welcome Back, {data.name}!</h1>
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
                  We share your scholarships with schools across the country.
                  You get Donor Credits whenever students join Edunomics for
                  your awards. Use them to create new awards or increase the
                  value of your current awards, on us.
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
              Your Scholarships<span> {count}</span>
            </h1>

            <Link to={"/create-scholar"} className="create-schoolarship">
              <AddIcon /> Create new scholarship
            </Link>
          </div>
          <div className="sc-box">
            <img src={boy} style={{ marginLeft: "2rem" }} alt="st" />
            <div className="sc-head" style={{ marginLeft: "10rem" }}>
              <h3>We're reviewing your recent submission</h3>
              <span>We'll have a proposal ready for you shortly!</span>
              <p>To request any edits, email Edunomics.in</p>
            </div>
          </div>
          <h1
            style={{
              marginTop: "2rem",
              textAlign: "center",
              marginBottom: "2rem",
              fontSize: "2rem",
              fontWeight: 700,
            }}
          >
            My Scholarships list ({count})
          </h1>
          {data2.map((item) => (
            <div
              className="approved_scholarships"
              style={{ marginTop: "2rem" }}
            >
              <div className="myApplication__main__scholarships_Container sc-box">
                <a href={`/view-scholarship/${item._id}&${myId._id}`}>
                  <img width="120px" height="80px" src={img} />

                  <div className="myApplication__main__scholarships_ContainerContent">
                    <div className="myApplication__title">{item.name}</div>
                    <ul className="myscholarship__details">
                      <li>
                        <div>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z"
                              stroke="#ACAEBF"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M13 2V9H20"
                              stroke="#ACAEBF"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <div style={{ marginBottom: ".5rem" }}>Type</div>
                          <div>Eassy required</div>
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
                            <path
                              d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                              stroke="#8F99A6"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M16 2V6"
                              stroke="#8F99A6"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M8 2V6"
                              stroke="#8F99A6"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M3 10H21"
                              stroke="#8F99A6"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <div style={{ marginBottom: ".5rem" }}>Deadline</div>
                          <div>Jun 1, 2022</div>
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
                          <div style={{ marginBottom: ".5rem" }}>Amount</div>
                          <div>{item.awardAmount}</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </a>

                <div className="finishApplicationBtn">
                  <a href={`/appliedapplicants`}>
                    <button style={{ cursor: "pointer" }}>
                      <span>5 Applicants</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M6.75 13.5L11.25 9L6.75 4.5"
                          stroke="#ACB4BF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
          )
        </div>
      )}

      <Footer />
    </div>
  );
}

export default DonarDashboard;
