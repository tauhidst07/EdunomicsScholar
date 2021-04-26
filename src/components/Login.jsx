import Header from "./Header";
import "../styles/login.css";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useContext } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

import { useForm } from "react-hook-form";
import { MyId } from "./context/MyId";

function Login() {
  const history = useHistory();

  let checkToken = localStorage.getItem("auth-token");
  if (checkToken != null) {
    history.push("/donar-dash");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typePass, setTypePass] = useState(false);

  const { register, handleSubmit } = useForm();
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
            ref={register}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          <h2 className="pass">Password</h2>
          <div className="showhide">
            <input
              className="u-input "
              type={typePass ? "text" : "password"}
              ref={register}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? "Show" : "Hide"}
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
