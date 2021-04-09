import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import boy from "../media/boy.jpeg";
import "../styles/allscholar.css";
import logo from "../media/edu.png";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import LocalConvenienceStoreIcon from "@material-ui/icons/LocalConvenienceStore";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import CakeIcon from "@material-ui/icons/Cake";

function AllScholarship() {
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState("");
  const [data, setData] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    /*axios
      .get("https://bckendapi.herokuapp.com/api/applicant/allScholarships")
      .then((res) => {
        //console.log(res.data);
        //setLoading(false);
        let dataset = res.data
        if(dataset != undefined){
          setData([res.data]);
        }

        //console.log(data);
        //setError("");
      })
      .catch((err) => {
        //setLoading(false);
        setData({});
        //setError("error is there");
        //console.log(error);
      });
*/
    async function fetchMyApi() {
      let response = await fetch(
        "https://bckendapi.herokuapp.com/api/applicant/allScholarships"
      );
      response = await response.json();
      setData([response]);
    }
    fetchMyApi();
  }, []);
  return (
    <div>
      <div className="dashboardHeader">
        <div className="dashboardHeader__logo">
          <Link to="/" className="logo-main" style={{ cursor: "pointer" }}>
            <img src={logo} alt="edu logo" />

            {/* <img className="log-pic" src={edu} alt="logo" /> */}
          </Link>
        </div>
        <ul className="dashboardHeader__routes">
          <li className="dashboard">
            <a href="/donar-dash">Dashboard</a>
          </li>

          <li className="scholerships">
            <a href="/all-scholar" className="activeRoute">
              All Scholarships
            </a>
          </li>

          <li className="inviteFrineds">
            <a href="/">Invite Applicants</a>
          </li>
          <li className="leaders">
            <a href="/leaders">Leaders</a>
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
                  history.push("/careers");
                }}
              >
                Sign out
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <h1 style={{ marginTop: "2rem", textAlign: "center" }}>
        scholarships {data === 0 ? 0 : data[0].count}
      </h1>

      {data === 0
        ? console.log("not fetched")
        : data[0].scholarships.map((e) => (
            <div key={e._id} className="main-boxshadow ">
              <div className="sc-box ">
                <img src={boy} alt="st" />
                <div className="sc-head">
                  <h3>{e.name}</h3>
                  <span>Funded by</span>
                  <p>
                    Become eligible for this scholarship by showcasing that you
                    know how to navigate your student loan options.
                  </p>
                </div>

                <div className="apply">
                  <button
                    className="apply-bt1"
                    onClick={() => {
                      history.push("/view-scholarship");
                    }}
                  >
                    View scholarship
                  </button>
                  <button className="apply-bt2">Contribute</button>
                </div>
              </div>

              <div className="elgi-field sc-box">
                <div className="field-el">
                  <h2>
                    <LocalConvenienceStoreIcon />
                    Education level
                  </h2>
                  <p>Any</p>
                </div>
                <div className="field-el">
                  <h2>
                    <AttachMoneyIcon />
                    Amount
                  </h2>
                  <p>{e.awardAmount}</p>
                </div>
                <div className="field-el">
                  <h2>
                    <CardGiftcardIcon /> Scholarships awarded
                  </h2>
                  <p>{e.winnersLimit}</p>
                </div>
                <div className="field-el">
                  <h2>
                    <CakeIcon />
                    Deadline
                  </h2>
                  <p>
                    <span>
                      {
                        new Date(e.awardDate.toString())
                          .toString()
                          .split(" ")[1]
                      }
                      -
                    </span>
                    <span style={{ marginLeft: ".1rem" }}>
                      {
                        new Date(e.awardDate.toString())
                          .toString()
                          .split(" ")[2]
                      }
                    </span>
                    -
                    <span style={{ marginLeft: ".1rem" }}>
                      {
                        new Date(e.awardDate.toString())
                          .toString()
                          .split(" ")[3]
                      }
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}

      <Footer />
    </div>
  );
}

export default AllScholarship;
