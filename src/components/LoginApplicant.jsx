import Header from "./Header";
import React, { useState } from "react";

import "../styles/login.css";

import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function LoginApplicant() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://bckendapi.herokuapp.com/api/user/signin", data)
      .then(function (response) {
        console.log(response);
        history.push("/dashboard");
        localStorage.setItem("auth-token", response.data.token);
        localStorage.setItem("jwt", JSON.stringify(data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <Header />
        <div className="loginbox">
          <h1 className="welcome">Welcome Back</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="uname">Email</h2>
            <input
              className="u-input"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              ref={register}
              value={email}
              type="text"
              placeholder="Email"
            />
            <h2 className="pass">Password</h2>
            <input
              className="u-input"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              ref={register}
              placeholder="Password"
            />
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
