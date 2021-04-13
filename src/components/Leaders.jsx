import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/leaders.css";
// import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";
import logo from "../media/edu.png";
import { Link, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function Leaders() {
  //   const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://bckendapi.herokuapp.com/api/user/leaders")
      .then((res) => {
        console.log(res.data.data);
        // setLoading(false);
        setData(res.data.data);
        setError("");
      })
      .catch((err) => {
        // setLoading(false);
        setData({});
        setError("error is there");
        console.log(error);
      });
  }, []);
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  function BasicTable() {
    const classes = useStyles();

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell># STUDENT</TableCell>
              <TableCell align="right">CITY</TableCell>
              <TableCell align="right">SCHOOL</TableCell>

              <TableCell align="right">BOLD POINTS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.education.degrees}</TableCell>
                <TableCell align="right">{row._id}</TableCell>

                <TableCell align="right">{row.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return (
    <div>
      <div className="dashboardHeader">
        <div className="dashboardHeader__logo">
        <Link to="/dashboard" className="logo-main" style={{ cursor: "pointer" }}>
            <img src={logo} alt="edu logo" />

          
          </Link>
        </div>
        <ul className="dashboardHeader__routes">
          <li className="dashboard">
            <a href="/dashboard">Dashboard</a>
          </li>
      
          <li className="scholerships">
            <a href="/">Scholarships</a>
          </li>
          <li className="myapplicants">
            <a href="/">My Applicants</a>
          </li>
          <li className="inviteFrineds">
            <a href="/">Invite Friends</a>
          </li>
          <li className="leaders">
            <a href="/leaders" className="activeRoute">
              Leaders
            </a>
          </li>
          <li className="search">
            <input type="text" placeholder="Search students" />
          </li>
        </ul>
        <div className="dashboardHeader__menu"></div>
      </div>
      <div className="leader_main">
        <h1>Leaderboards</h1>
        <div className="lead-p">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle
              opacity="0.1"
              cx="20"
              cy="20"
              r="20"
              fill="#5D57FB"
            ></circle>
            <path
              d="M12.75 25.9412V16.109L15.4242 17.6205C15.9008 17.8898 16.5028 17.7689 16.8384 17.3364L16.2458 16.8767L16.8384 17.3364L20.0483 13.1992L23.4928 17.3613C23.8413 17.7824 24.4455 17.8847 24.9132 17.602L27.3088 16.1535V25.9412C27.3088 26.1117 27.1706 26.25 27 26.25H13.0588C12.8883 26.25 12.75 26.1117 12.75 25.9412Z"
              stroke="#5D57FB"
              stroke-width="1.5"
            ></path>
          </svg>
          <p>
            Move up the leaderboards and become the boldest student in your
            region to increase your chances of winning!
          </p>
        </div>
      </div>

      <BasicTable />
      <Footer />
    </div>
  );
}

export default Leaders;
