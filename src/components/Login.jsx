import Header from "./Header";
import "../styles/login.css";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://bckendapi.herokuapp.com/api/user/signin-donar", data)
      .then(function (response) {
        console.log(response);
        localStorage.setItem("auth-token", response.data);
        localStorage.setItem("jwt", JSON.stringify(data));
        history.push("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Header />
      <div className="loginbox">
        <h1 className="welcome">Welcome Back</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="uname">Email</h2>
          <input
            className="u-input"
            type="text"
            ref={register}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          <h2 className="pass">Password</h2>
          <input
            className="u-input"
            type="password"
            ref={register}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
  );
}

export default Login;
