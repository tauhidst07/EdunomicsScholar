import React from "react";
import Header from "./Header";
import "../styles/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <Header />
      <div className="loginbox">
        <h1 className="welcome">Welcome Back</h1>
        <form>
          <h2 className="uname">Email</h2>
          <input className="u-input" type="text" placeholder="Email" />
          <h2 className="pass">Password</h2>
          <input className="u-input" type="password" placeholder="Password" />
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
