import React, { useState, useEffect } from "react";
import logo from "../media/edu.png";
import gir from "../media/gir.jpeg";
import boy from "../media/boy.jpeg";
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
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../styles/viewscholar.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import MoreAboutDoner from "./donar/MoreAboutDoner";
import DashboardHeader from "./DashboardHeader";
import jwt from "jsonwebtoken";
import axios from "axios";
import API_URL from "../service/url";

function ApliViewScholarship() {
  let { scholarParams } = useParams();
  console.log(scholarParams);

  let encodedToken = localStorage.getItem("token");

  let appliId = jwt.decode(encodedToken)._id;
  // console.log(scholarParams.split('&'))

  const [data, setData] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const [applied, setApplied] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => { 
    console.log("before fetching request");
    axios
      .get(
        `https://edufunding.api.appsdeployer.com/api/donar/oneScholarship/${scholarParams}`
      )
      .then((res) => {
        res = res.data;
        setData(res);
        console.log("data: ",res);
      })
      .catch((err)=>{
        console.log("error in fethcing scholarship info",err.message); 
        console.log("error: ",err)
      });

    async function fetchMyApi() {
      let response = await fetch(
        `http://localhost:4000/api/donar/oneScholarship/${scholarParams}`
      );
      response = await response.json();
      await setData([response]);
      await console.log(data);

      //setDonarId(response.scholarships.createdBy);
      /*
      if (response.scholarships.applicants.indexOf(appliId) > -1) {
        setApplied(true);
        console.log(response.scholarships.applicants.indexOf(appliId), applied);
        console.log(appliId);
      } else {
        setApplied(false);
        console.log(appliId, false);
      }
*/
    }
    //fetchMyApi();
  }, []);

  const applySchoarship = async () => {
    //console.log(appliId)
    if (data != 0 && appliId) {
      let prevApplicants = data.applicants.applicants;
      prevApplicants.push({ applicant: appliId, status: "submitted" });

      console.log(prevApplicants);
      let url = `${API_URL}donar/editScholarship/${data.applicants._id}`;
      const res = await axios.patch(url, { applicants: prevApplicants });
      history.push("/myapplications/:scholarid");

      console.log(res);
      console.log("clicked");
      // editing applicant
      // let url= `https://bckendapi.herokuapp.com/api/user/editProfile/${appliId}`
      // let appli=
      // const res = await axios.patch(url, { applicants: prevApplicants });
    } else {
      console.log("err");
    }

    // function call on div click to apply scholarship
  };

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
            history.push("/all-apli-scholarships");
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
      <DashboardHeader isActive={true} />
      <IconLabelButtons />

      <div className="single-sch">
        <div className="left-sing">
          <h2>{data === 0 ? "" : data.applicants.name} </h2>
          <div className="img-sc">
            <img src={gir} alt="" />
            <div className="two-head" style={{ marginLeft: "1rem" }}>
              <h4>Funded by </h4>
              <p>{data === 0 ? "" : data.applicants.createdBy.name}</p>
            </div>
            <Link to={`/apli-more-aboutdoner/${scholarParams.split("&")[1]}`}>
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
            {data === 0 ? "" : data.applicants.description}
          </p>
        </div>
        <div className="right-sing">
          <div className="right-doll">
            <h1>
              {data === 0 ? "" :`$${data.applicants.awardAmount}`}
              <span>OPEN</span>
            </h1>
            <p>
              {data === 0 ? "" : data.applicants.winnersLimit} winner
            </p>
          </div>
          <div onClick={applySchoarship}>
            <button className="apply-sc" disabled={applied}>
              {applied ? "Applied" : "Apply to Scholarship"}
            </button>
          </div>
          <button>Nominate a Friend</button>
          <div className="con-1">
            <h5>Application Deadline</h5>
            <p>
              <span style={{ marginLeft: ".1rem" }}>
                {
                  new Date(data === 0 ? "" : data.applicants.deadline)
                    .toString()
                    .split(" ")[1]
                }
              </span>
              -
              <span style={{ marginLeft: ".1rem" }}>
                {
                  new Date(data === 0 ? "" : data.applicants.deadline)
                    .toString()
                    .split(" ")[2]
                }
              </span>
              -
              <span style={{ marginLeft: ".1rem" }}>
                {
                  new Date(data === 0 ? "" : data.applicants.deadline)
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
                  new Date(data === 0 ? "" : data.applicants.awardDate)
                    .toString()
                    .split(" ")[1]
                }
              </span>
              -
              <span style={{ marginLeft: ".1rem" }}>
                {
                  new Date(data === 0 ? "" : data.applicants.awardDate)
                    .toString()
                    .split(" ")[2]
                }
              </span>
              -
              <span style={{ marginLeft: ".1rem" }}>
                {
                  new Date(data === 0 ? "" : data.applicants.awardDate)
                    .toString()
                    .split(" ")[3]
                }
              </span>
            </p>
          </div>
          <div className="con-1">
            <h5>Education Level</h5>
            <p>
              {data === 0
                ? ""
                : data.applicants.eligible.map((e, i) => (
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
      {/* <div className="app-down">
        <h1>Scholarship application</h1>
        <p>ESSAY TOPIC</p>
        <h2>
          Tell us about one teacher, counselor, or social worker who helped you
          pursue higher education. How did this person impact your higher
          education journey?
        </h2>
        <h3>400–600 words</h3>
      </div> */}
      <div className="mind">
        <h1 style={{ marginLeft: ".1rem" }}>Question 1 to Applicant</h1>
        <input
          className="u-input"
          type="text"
          name="question1"
          // ref={register}
          placeholder="Answer 1"
        />
      </div>
      <div className="mind">
        <h1 style={{ marginLeft: ".1rem" }}>Question 2 to Applicant</h1>
        <input
          style={{ marginBottom: "2rem" }}
          className="u-input"
          type="text"
          name="question1"
          // ref={register}
          placeholder="Answer 2"
        />
      </div>
      <Footer />
    </div>
  );
}

export default ApliViewScholarship;
