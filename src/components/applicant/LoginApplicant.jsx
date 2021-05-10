import Header from "../Header";
import React, { useState } from "react";
import jwt from "jsonwebtoken";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import WarningIcon from "@material-ui/icons/Warning";
import { loginAppli } from "../redux/actions/authAppliAction";
import { useDispatch } from "react-redux";
import "../../styles/login.css";
import Alert from "../Alert";

import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function LoginApplicant() {
  const history = useHistory();

  let checkToken = localStorage.getItem("auth-token");
  if (checkToken != null) {
    history.push("/dashboard");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typePass, setTypePass] = useState(false);

  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // console.log(data);
    // axios
    //   .post("https://bckendapi.herokuapp.com/api/user/signin", data)
    //   .then(function (response) {
    //     console.log(response);
    //     localStorage.setItem("auth-token", response.data.token);
    //     let encodedToken = localStorage.getItem("auth-token");
    //     // console.log(encodedToken)
    //     // console.log(jwt.decode(encodedToken))
    //     // localStorage.setItem("jwt", JSON.stringify(data));
    //     history.push("/dashboard");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    dispatch(loginAppli(data, history));
  };
  return (
    <div>
      <div>
        <Header isappliactive={true} />
        <Alert />
        <div className="loginbox">
          <h1 className="welcome">Welcome Back</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="uname">Email</h2>
            <input
              className="u-input"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              value={email}
              type="text"
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
                className="u-input"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={typePass ? "text" : "password"}
                ref={register({ required: true, minLength: 6 })}
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
    </div>
  );
}

export default LoginApplicant;
