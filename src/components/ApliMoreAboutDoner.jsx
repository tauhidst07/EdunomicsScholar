import React, { useState, useEffect } from "react";
import logo from "../media/edu.png";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { useHistory ,Link} from "react-router-dom";
import "../styles/moreaboutdoner.css";
import PersonIcon from "@material-ui/icons/Person";

import scholar from "../media/schola.jpeg";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {useParams} from 'react-router-dom';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DashboardHeader from "./DashboardHeader"
import Footer from "./Footer";



function ApliMoreAboutDoner() {
    const [data, setData] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();
    //const { handle } = props.match.params;
    let {donarId} = useParams();
    //console.log(donarId)
  
    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
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
  
    useEffect(() => {
      async function fetchMyApi() {
        let response = await fetch(
          `https://bckendapi.herokuapp.com/api/donar/donarprofile/${donarId}`
        );
        response = await response.json();
        setData([response]);
        //console.log(data);
  
      }
      fetchMyApi();
  
  
  
  
    }, []);
  
  
    const useStyles = makeStyles((theme) => ({
      button: {
        margin: theme.spacing(1),
      },
    }));
    return (
        <div>
          <DashboardHeader/> 
          < IconLabelButtons/>
      <div className="more-donar">
        <h1>Donor Profile: { data  === 0 ? "" : data[0].name}</h1>
        {console.log(data)}
        <p>
          Scholarships, grants, and award winners for { data  === 0 ? "" : data[0].name}
        </p>
      </div>
      <div className="don-details">
        <div className="doner-det">
          <img src={scholar} alt="" />
          <h1>
            { data  === 0 ? "" : data[0].name}
          </h1>
          <h4 style={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon />
            N/A
          </h4>
          <p>Date- { data  === 0 ? "" : data[0].createdOn === undefined ? 'N/A' : data[0].createdOn}</p>
        </div>
        <div className="doner-right">
          <div className="doner-three">
            <div className="part1">
              <h1>1</h1>
              <p>Scholarship</p>
            </div>
            <div className="part1">
              <h1> $5,000</h1>
              <p>Total Awards</p>
            </div>
            <div className="part1">
              <h1>{ data  === 0 ? "" : data[0].createdOn === undefined ? 'N/A' : data[0].createdOn}</h1>
              <p>Joined Edunomics.in</p>
            </div>
          </div>
          <div className="bot-doner">
            <h1>Mission</h1>
            <p>
              { data  === 0 ? "" : data[0].mission === undefined ? 'N/A' : data[0].mission}
            </p>
          </div>
        </div>
      </div> 
          <Footer/>
        </div>
    )
}

export default ApliMoreAboutDoner
