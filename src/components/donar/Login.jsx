import Header from "../Header";
import "../../styles/login.css";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import jwt from "jsonwebtoken";
import WarningIcon from "@material-ui/icons/Warning";

import { useForm } from "react-hook-form";
// import { MyId } from "./context/MyId";

function Login() {
  const history = useHistory();

  let checkToken = localStorage.getItem("auth-token");
  if (checkToken != null) {
    history.push("/donar-dash");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typePass, setTypePass] = useState(false);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://bckendapi.herokuapp.com/api/user/signin-donar", data)
      .then(function (response) {
        //console.log(response.data);
        localStorage.setItem("auth-token", response.data.token);
        //localStorage.setItem("jwt", JSON.stringify(data));
        let encodedToken = localStorage.getItem("auth-token");
        console.log(encodedToken);
        console.log(jwt.decode(encodedToken));
        history.push("/donar-dash");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Header isActive={true} />
      <div className="loginbox">
        <h1 className="welcome">Welcome Back</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="uname">Email</h2>
          <input
            className="u-input"
            type="text"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          {errors.email && (
            <p className="validinputs">
              <WarningIcon
                style={{
                  color: "red",
                  fontSize: ".7rem",
                  textAlign: "center",
                  marginRight: ".3rem",
                }}
              />
              This email field is required
            </p>
          )}
          <h2 className="pass">Password</h2>
          <div className="showhide">
            <input
              className="u-input "
              type={typePass ? "text" : "password"}
              ref={register({ required: true, minLength: 6 })}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            {errors.password && errors.password.type === "required" && (
              <p className="validinputs">
                <WarningIcon
                  style={{
                    color: "red",
                    fontSize: ".7rem",
                    textAlign: "center",
                    marginRight: ".3rem",
                  }}
                />
                This password field is required
              </p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p
                style={{
                  marginTop: ".4rem",
                  color: "red",
                  fontSize: ".7rem",
                  fontWeight: 700,
                  textAlign: "center",
                  display: "flex",
                }}
              >
                <WarningIcon
                  style={{
                    color: "red",
                    fontSize: ".7rem",
                    textAlign: "center",
                    marginRight: ".3rem",
                  }}
                />
                Password must have at least 6 characters
              </p>
            )}
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </small>
          </div>

          <p className="forgot">forgot password ?</p>
          <button className="signin">Sign In</button>
          <p className="dont">Don't have an account?</p>
          <div className="option">
            <Link to="/signup" className="opt1">
              Sign up as a Donor
            </Link>
            <Link to="/signupApli" className="opt1">
              Sign up as an Applicant
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
