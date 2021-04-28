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

function ViewScholarship() {
  let { scholarParams } = useParams();

  console.log(scholarParams.split("&"));

  const [data, setData] = useState(0);
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

  useEffect(() => {
    async function fetchMyApi() {
      let response = await fetch(
        `https://bckendapi.herokuapp.com/api/donar/oneScholarship/${
          scholarParams.split("&")[0]
        }`
      );
      response = await response.json();
      setData([response]);

      setDonarId(response.scholarships.createdBy);
      console.log(data);

      // funder data
      let funderRes = await fetch(
        `https://bckendapi.herokuapp.com/api/donar/donarprofile/${
          scholarParams.split("&")[1]
        }`
      );
      funderRes = await funderRes.json();
      setFunder([funderRes]);
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
          <img src={logo} alt="edu logo" />
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
      <div>
        <IconLabelButtons />
      </div>
      <div className="single-sch">
        <div className="left-sing">
          <h2>{data === 0 ? "" : data[0].scholarships.name}</h2>
          <div className="img-sc">
            <img src={gir} alt="" />
            <div className="two-head" style={{ marginLeft: "1rem" }}>
              <h4>Funded by </h4>
              <p>{funder === 0 ? "" : funder[0].name}</p>
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
            {data === 0 ? "" : data[0].scholarships.description}
          </p>
        </div>
        <div className="right-sing">
          <div className="right-doll">
            <h1>
              {data === 0 ? "" : data[0].scholarships.awardAmount}
              <span>OPEN</span>
            </h1>
            <p>{data === 0 ? "" : data[0].scholarships.winnersLimit} winner</p>
          </div>
          <button>Contribute</button>
          <div className="con-1">
            <h5>Application Deadline</h5>
            <p>
              <span style={{ marginLeft: ".1rem" }}>
                {
                  new Date(data === 0 ? "" : data[0].scholarships.awardDate)
                    .toString()
                    .split(" ")[1]
                }
              </span>
              -
              <span style={{ marginLeft: ".1rem" }}>
                {
                  new Date(data === 0 ? "" : data[0].scholarships.awardDate)
                    .toString()
                    .split(" ")[2]
                }
              </span>
              -
              <span style={{ marginLeft: ".1rem" }}>
                {
                  new Date(data === 0 ? "" : data[0].scholarships.awardDate)
                    .toString()
                    .split(" ")[3]
                }
              </span>
            </p>
          </div>
          <div className="con-1">
            <h5>Winners Announced</h5>
            <p>N/A</p>
          </div>
          <div className="con-1">
            <h5>Education Level</h5>
            <p>
              {data === 0
                ? ""
                : data[0].scholarships.eligible.map((e, i) => (
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
        <h2>
          Tell us about one teacher, counselor, or social worker who helped you
          pursue higher education. How did this person impact your higher
          education journey?{" "}
        </h2>
        <h3>400–600 words</h3>
      </div>
      <Footer />
    </div>
  );
}

export default ViewScholarship;
