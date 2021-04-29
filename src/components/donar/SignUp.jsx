import React, { useState } from "react";
import "../../styles/signup.css";
import { Link, useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import edu from "../../media/edu.png";
import { useForm } from "react-hook-form";

import axios from "axios";

function SignUp() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [typePass, setTypePass] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://bckendapi.herokuapp.com/api/user/signup-donar", data)
      .then(function (response) {
        // console.log(response);
        history.push("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="signup-header">
      <nav className="naavv">
        <Link
          to="/"
          className="logo-maain"
          style={{ cursor: "pointer", marginRight: "1rem" }}
        >
          <img className="log-pic" src={edu} alt="logo" />
        </Link>
        <div className="tog-1">
          <svg
            className="ic1"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M15 15.75V14.25C15 13.4544 14.6839 12.6913 14.1213 12.1287C13.5587 11.5661 12.7956 11.25 12 11.25H6C5.20435 11.25 4.44129 11.5661 3.87868 12.1287C3.31607 12.6913 3 13.4544 3 14.25V15.75"
              stroke="#8F99A6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z"
              stroke="#8F99A6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>

          <Link to="/login" className="already">
            Already have an account?
          </Link>
        </div>
      </nav>

      <div className="loginbox">
        <h1 className="welcome">Sign Up as a Donor</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="uname">Name</h2>
          <input
            ref={register}
            className="u-input"
            type="text"
            name="name"
            data-test="name"
            placeholder="Name"
          />
          <h2 className="uname">Username</h2>
          <input
            className="u-input"
            ref={register}
            type="text"
            data-test="username"
            name="username"
            placeholder="username"
          />
          <h2 className="uname">Email</h2>
          <input
            className="u-input"
            ref={register}
            type="text"
            name="email"
            data-test="email"
            placeholder="Email"
          />
          <h2 className="pass">Password</h2>
          <div className="showhide">
            <input
              className="u-input"
              ref={register}
              type={typePass ? "text" : "password"}
              data-test="password"
              name="password"
              placeholder="Password"
            />
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </small>
          </div>

          <button className="signin" style={{ marginTop: "1rem" }}>
            Sign Up
          </button>

          <div className="option-signup" style={{ marginTop: "2rem" }}>
            <Link to="/login" className="opt1">
              Login as a Donor
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
