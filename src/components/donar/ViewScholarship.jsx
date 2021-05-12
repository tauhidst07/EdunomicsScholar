import React, { useState, useEffect } from "react";
import logo from "../../media/edu.png";
import gir from "../../media/gir.jpeg";
import boy from "../../media/boy.jpeg";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Menu, MenuItem, Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import {
  useHistory,
  Link,
  BrowserRouter as Router,
  Route,
  useParams,
} from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import Footer from "../Footer";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../../styles/viewscholar.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import MoreAboutDoner from "./MoreAboutDoner";
import { getViewSchol, getFunder } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

function ViewScholarship() {
  const { viewSchol, getfunder } = useSelector((state) => state.auth);
  // console.log(moreAboutDon);

  let { scholarParams } = useParams();

  // console.log(scholarParams.split("&"));

  const [data, setData] = useState(0);
  // setviewSchol([viewSchol]);

  // console.log(viewSchol);
  const [funder, setFunder] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const [donarId, setDonarId] = useState("");

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMyApi() {
      dispatch(getViewSchol(scholarParams));
      dispatch(getFunder(scholarParams));

      // let response = await fetch(
      //   `https://bckendapi.herokuapp.com/api/donar/oneScholarship/${
      //     scholarParams.split("&")[0]
      //   }`
      // );
      // response = await response.json();
      // console.log("viewSchol",response);
      // setviewSchol([response]);

      // //setDonarId(response.scholarships.createdBy);
      // console.log("viewSchol",viewSchol);

      // funder viewSchol
      // let funderRes = await fetch(
      //   `https://bckendapi.herokuapp.com/api/donar/donarprofile/${
      //     scholarParams.split("&")[1]
      //   }`
      // );
      // funderRes = await funderRes.json();
      // setFunder([funderRes]);
      //console.log(funder);
    }
    fetchMyApi();
  }, []);
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  function IconLabelButtons() {
    const classes = useStyles();

    return (
      <div style={{ marginLeft: "5rem", marginTop: "2rem" }}>
        <Button
          variant="contained"
          color="default"
          size="small"
          onClick={() => {
            history.push("/all-scholar");
          }}
          className={classes.button}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </div>
    );
  }
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
            <a href="/donar-dash">Dashboard</a>
          </li>

          <li className="scholerships">
            <a href="/all-scholar" className="activeRoute">
              All Scholarships
            </a>
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
                  history.push("/careers");
                }}
              >
                Sign out
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div>
        <IconLabelButtons />
      </div>
      <div className="single-sch">
        <div className="left-sing">
          <h2>{viewSchol === 0 ? "" : viewSchol?.applicants?.name}</h2>
          <div className="img-sc">
            <img src={gir} alt="" />
            <div className="two-head" style={{ marginLeft: "1rem" }}>
              <h4>Funded by </h4>
              <p>{getfunder === 0 ? "" : getfunder?.name}</p>
            </div>
            <Link to={`/more-about-donar/${scholarParams.split("&")[1]}`}>
              <h4
                style={{
                  marginLeft: "26rem",
                  color: "#76788c",
                  marginRight: ".5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Learn more about the Donor <DoubleArrowIcon />
              </h4>
            </Link>
          </div>
          <img className="big-img" src={boy} />
          <p className="des-pp">
            {viewSchol === 0 ? "" : viewSchol?.applicants?.description}
          </p>
        </div>
        <div className="right-sing">
          <div className="right-doll">
            <h1>
              {viewSchol === 0 ? "" : viewSchol?.applicants?.awardAmount}
              <span>OPEN</span>
            </h1>
            <p>
              {viewSchol === 0 ? "" : viewSchol?.applicants?.winnersLimit}{" "}
              winner
            </p>
          </div>
          <button>Contribute</button>
          <div className="con-1">
            <h5>Application Deadline</h5>
            <p>
              <span style={{ marginLeft: ".1rem" }}>
                {
                  new Date(
                    viewSchol === 0 ? "" : viewSchol?.applicants?.deadline
                  )
                    .toString()
                    .split(" ")[1]
                }
              </span>
              -
              <span style={{ marginLeft: ".1rem" }}>
                {
                  new Date(
                    viewSchol === 0 ? "" : viewSchol?.applicants?.deadline
                  )
                    .toString()
                    .split(" ")[2]
                }
              </span>
              -
              <span style={{ marginLeft: ".1rem" }}>
                {
                  new Date(
                    viewSchol === 0 ? "" : viewSchol?.applicants?.deadline
                  )
                    .toString()
                    .split(" ")[3]
                }
              </span>
            </p>
          </div>
          <div className="con-1">
            <h5>Winners Announced</h5>
            <p>
              <span style={{ marginLeft: ".1rem" }}>
                {
                  new Date(
                    viewSchol === 0 ? "" : viewSchol?.applicants?.awardDate
                  )
                    .toString()
                    .split(" ")[1]
                }
              </span>
              -
              <span style={{ marginLeft: ".1rem" }}>
                {
                  new Date(
                    viewSchol === 0 ? "" : viewSchol?.applicants?.awardDate
                  )
                    .toString()
                    .split(" ")[2]
                }
              </span>
              -
              <span style={{ marginLeft: ".1rem" }}>
                {
                  new Date(
                    viewSchol === 0 ? "" : viewSchol?.applicants?.awardDate
                  )
                    .toString()
                    .split(" ")[3]
                }
              </span>
            </p>
          </div>
          <div className="con-1">
            <h5>Education Level</h5>
            <p>
              {viewSchol === 0
                ? ""
                : viewSchol?.applicants?.eligible.map((e, i) => (
                    <span key={i}>{e}, </span>
                  ))}
            </p>
          </div>
          <div className="social">
            <h1>SHARE</h1>
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <FileCopyIcon />
          </div>
        </div>
      </div>
      <div className="app-down">
        <h1>Scholarship application</h1>
        <p>ESSAY TOPIC</p>

          {
            viewSchol === 0
            ? ""
            : viewSchol?.applicants?.askedQuiz.map((e, i) => (
                //console.log(e.quiz)
                e.quiz.map((q) => (
                  //console.log(q)
                  <h2>{q}</h2>
                ))

          ))
          /*

          console.log(viewSchol?.applicants?.askedQuiz,'askedQuiz')*/
        }

        <h3>400–600 words</h3>
      </div>
      <Footer />
    </div>
  );
}

export default ViewScholarship;
