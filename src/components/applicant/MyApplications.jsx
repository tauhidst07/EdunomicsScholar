import React, { useState, useEffect } from "react";
import DashboardHeader from "../DashboardHeader";
import "../../styles/MyApplication.css";
import jwt from "jsonwebtoken";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Link, useHistory } from "react-router-dom";
import img from "../../media/scholar-img.jpeg";
import { getmyAppli } from "../redux/actions/authAppliAction";
import { useDispatch, useSelector } from "react-redux";

const MyApplications = () => {
  const { myAppli, loader } = useSelector((state) => state.authAppli);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(myAppli);
  console.log(myAppli);
  const [data2, setData2] = useState([]);
  // const [count,setCount] = useState()

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    let encodedToken = localStorage.getItem("token");

    let myId = jwt.decode(encodedToken);
    dispatch(getmyAppli(myId?._id));

    // axios
    //   .get(
    //     `https://bckendapi.herokuapp.com/api/applicant/myScholarships/${myId._id}`
    //   )
    //   .then((res) => {
    //     console.log(res.data.scholarships);
    //     setData(res.data.scholarships);
    //     setLoading(false);

    //     // setData2(res.data)
    //     // setCount(res.data.count)
    //   })

    //   .catch((err) => {
    //     setData({});
    //     setError("error is there");
    //     console.log(error);
    //   });
  }, []);

  const [selected, setSelected] = useState("all");

  return (
    <div className="myApplication">
      <DashboardHeader activeapp={true} myapplication="myapplications" />
      {loader ? (
        <div style={{ textAlign: "center", alignItems: "center" }}>
          <Loader type="ThreeDots" color="grey" height={100} width={100} />
        </div>
      ) : (
        <div className="myApplication__main">
          <h1>My Applications ({myAppli?.count})</h1>

          <ul className="myapplication__tabs">
            <li
              className={
                selected === "all" ? "myApplication__main__activeLi" : ""
              }
              onClick={(e) => {
                setSelected("all");
              }}
            >
              All Applications <span></span>
            </li>
            <li
              onClick={() => {
                setSelected("drafts");
              }}
              className={
                selected === "drafts" ? "myApplication__main__activeLi" : ""
              }
            >
              Drafts <span></span>
            </li>
            <li
              onClick={() => {
                setSelected("submitted");
              }}
              className={
                selected === "submitted" ? "myApplication__main__activeLi" : ""
              }
            >
              Submitted <span></span>
            </li>
            <li
              onClick={() => {
                setSelected("inreview");
              }}
              className={
                selected === "inreview" ? "myApplication__main__activeLi" : ""
              }
            >
              In Review <span></span>
            </li>
            <li
              onClick={() => {
                setSelected("finalist");
              }}
              className={
                selected === "finalist" ? "myApplication__main__activeLi" : ""
              }
            >
              Finalist <span></span>
            </li>
            <li
              className={
                selected === "winner" ? "myApplication__main__activeLi" : ""
              }
              onClick={() => {
                setSelected("winner");
              }}
            >
              Winner <span></span>
            </li>
            <li
              className={
                selected === "archive" ? "myApplication__main__activeLi" : ""
              }
              onClick={() => {
                setSelected("archive");
              }}
            >
              Archive <span></span>
            </li>
          </ul>
          {myAppli?.scholarships?.map((item) => (
            <div className="myApplication__main__scholarships">
              <div className="myApplication__main__scholarships_Container">
                <a href="/">
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
                          <div>Type</div>
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
                          <div>Deadline</div>
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
                          <div>Amount</div>
                          <div>{item.awardAmount}</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </a>

                <div className="finishApplicationBtn">
                  <Link to="/all-apli-scholarships">
                    <button style={{ cursor: "pointer" }}>
                      Finish application
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyApplications;
