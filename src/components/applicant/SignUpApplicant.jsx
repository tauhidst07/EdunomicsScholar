import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import Alert from "../Alert";

import edu from "../../media/edu.png";
import WarningIcon from "@material-ui/icons/Warning";
import { signupAppli } from "../redux/actions/authAppliAction";
import { useDispatch } from "react-redux";

function SignUpApplicant() {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();
  const [typePass, setTypePass] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // axios
    //   .post("https://bckendapi.herokuapp.com/api/user/signup", data)
    //   .then(function (response) {
    //     console.log(response);
    //     history.push("/loginApli");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    dispatch(signupAppli(data, history));
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

          <Link to="/loginApli" className="already">
            Already have an account?
          </Link>
        </div>
      </nav>
      <div>
        <Alert isAppSignup={true} />
      </div>
      <div className="loginbox">
        <h1 className="welcome">Sign Up as an Applicant</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="uname">Name</h2>
          <input
            ref={register({ required: true, maxLength: 10 })}
            name="name"
            className="u-input"
            type="text"
            data-test="username"
            placeholder="Name"
          />
          {errors.name && errors.name.type === "required" && (
            <p className="validinputs">
              <WarningIcon
                style={{
                  color: "red",
                  fontSize: ".7rem",
                  textAlign: "center",
                  marginRight: ".3rem",
                }}
              />
              This name field is required
            </p>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <p className="validinputs">
              {" "}
              <WarningIcon
                style={{
                  color: "red",
                  fontSize: ".7rem",
                  textAlign: "center",
                  marginRight: ".3rem",
                }}
              />{" "}
              Your input exceed maximum length
            </p>
          )}
          <h2 className="uname">Username</h2>
          <input
            ref={register({ required: true, maxLength: 10 })}
            name="username"
            className="u-input"
            type="text"
            data-test="username"
            placeholder="username"
          />
          {errors.username && errors.username.type === "required" && (
            <p className="validinputs">
              {" "}
              <WarningIcon
                style={{
                  color: "red",
                  fontSize: ".7rem",
                  textAlign: "center",
                  marginRight: ".3rem",
                }}
              />
              This username field is required
            </p>
          )}
          {errors.username && errors.username.type === "maxLength" && (
            <p className="validinputs">
              {" "}
              <WarningIcon
                style={{
                  color: "red",
                  fontSize: ".7rem",
                  textAlign: "center",
                  marginRight: ".3rem",
                }}
              />
              Your input exceed maximum length
            </p>
          )}
          <h2 className="uname">Email</h2>
          <input
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            name="email"
            className="u-input"
            type="text"
            data-test="username"
            placeholder="Email"
          />
          {errors.email && (
            <p className="validinputs">
              {" "}
              <WarningIcon
                style={{
                  color: "red",
                  fontSize: ".7rem",
                  textAlign: "center",
                  marginRight: ".3rem",
                }}
              />{" "}
              This email field is required
            </p>
          )}
          <h2 className="pass">Password</h2>
          <div className="showhide">
            <input
              ref={register({ required: true, minLength: 6 })}
              name="password"
              className="u-input"
              type={typePass ? "text" : "password"}
              data-test="password"
              placeholder="Password"
            />
            {errors.password && errors.password.type === "required" && (
              <p className="validinputs">
                {" "}
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
              <p className="validinputs">
                {" "}
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

          <h2 className="uname">DOB</h2>
          <input
            ref={register}
            name="dob"
            className="u-input"
            type="date"
            data-test="username"
            placeholder="Date of birth"
          />
          <h2 className="uname">Gender</h2>
          <input
            ref={register}
            name="gender"
            className="u-input"
            type="text"
            data-test="username"
            placeholder="Gender"
          />
          <h2 className="uname">Bio</h2>
          <input
            ref={register}
            name="bio"
            className="u-input"
            type="text"
            data-test="username"
            placeholder="Bio"
          />
          <h2 className="uname">Location</h2>
          <input
            ref={register}
            name="location"
            className="u-input"
            type="text"
            data-test="username"
            placeholder="Location"
          />
          <h2 className="uname">Address</h2>
          <input
            ref={register}
            name="address"
            className="u-input"
            type="text"
            data-test="username"
            placeholder="Address"
          />
          {/* <p className="forgot">forgot password ?</p> */}
          <button className="signin">Sign Up</button>
          {/* <p className="dont">Don't have an account?</p> */}
          <div className="option-signup" style={{ marginTop: "2rem" }}>
            <Link to="/signup" className="opt1">
              Sign up as a Donor
            </Link>
            <Link to="/loginApli" className="opt1">
              Sign up as an Applicant
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpApplicant;
