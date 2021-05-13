import Footer from "../Footer";
import React, { useState, useEffect } from "react";
import logo from "../../media/edu.png";
// import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import "../../styles/leaders.css";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { getLeaders } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

function DonerLeaders() {
  const { leaders } = useSelector((state) => state.auth);
  console.log(leaders);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const [error, setError] = useState("");
  const [data, setData] = useState(leaders);
  console.log(data);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeaders());

    // axios
    //   .get("https://bckendapi.herokuapp.com/api/user/leaders")
    //   .then((res) => {
    //     console.log(res.data.data);
    //     // setLoading(false);
    //     setData(res.data.data);
    //     setError("");
    //   })
    //   .catch((err) => {
    //     // setLoading(false);
    //     setData({});
    //     setError("error is there");
    //     console.log(error);
    //   });
  }, []);
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      table: {
        minWidth: 650,
      },
    },
  }));

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
            {leaders?.data.map((row) => (
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
            <a href="/all-scholar">All Scholarships</a>
          </li>

          <li className="inviteFrineds">
            <a href="/invite-applicant">Invite Applicants</a>
          </li>
          <li className="leaders">
            <a href="/leaders" className="activeRoute">
              Leaders
            </a>
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
      <div className="leader_main">
        <h1> Student Leaderboards</h1>
        <div className="lead-p">
          <p>
            Browse leaderboards to find the boldest students in your region!
          </p>
        </div>
      </div>
      <BasicTable />
      <Footer />
    </div>
  );
}

export default DonerLeaders;
