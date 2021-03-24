import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import edu from "../media/edu.png";

function SignUpApplicant() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState(new Date().toISOString().split("T")[0]);
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("http://rishabhsingh.herokuapp.com/api/user/signup", data)
      .then(function (response) {
        console.log(response);
        history.push("/loginApli");
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
          {/* <button className="tg1">Donors</button>
      <button className="tg1">Applicants</button> */}
          <Link to="/login" className="already">
            Already have an account?
          </Link>
        </div>
      </nav>

      <div className="loginbox">
        <h1 className="welcome">Sign Up as an Applicant</h1>
        {/* <p>
          {[
            name,
            " ",
            username,
            " ",
            email,
            " ",
            password,
            " ",
            gender,
            " ",
            bio,
            " ",
            location,
            " ",
            address,
            " ",
          ]}
        </p>
        {dob} */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="uname">Name</h2>
          <input
            ref={register}
            name="name"
            className="u-input"
            type="text"
            data-test="username"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h2 className="uname">Username</h2>
          <input
            ref={register}
            name="username"
            className="u-input"
            type="text"
            data-test="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h2 className="uname">Email</h2>
          <input
            ref={register}
            name="email"
            className="u-input"
            type="text"
            data-test="username"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h2 className="pass">Password</h2>
          <input
            ref={register}
            name="password"
            className="u-input"
            type="password"
            data-test="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h2 className="uname">DOB</h2>
          <input
            ref={register}
            name="dob"
            className="u-input"
            type="date"
            data-test="username"
            placeholder="Date of birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <h2 className="uname">Gender</h2>
          <input
            ref={register}
            name="gender"
            className="u-input"
            type="text"
            data-test="username"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <h2 className="uname">Bio</h2>
          <input
            ref={register}
            name="bio"
            className="u-input"
            type="text"
            data-test="username"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <h2 className="uname">Location</h2>
          <input
            ref={register}
            name="location"
            className="u-input"
            type="text"
            data-test="username"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <h2 className="uname">Address</h2>
          <input
            ref={register}
            name="address"
            className="u-input"
            type="text"
            data-test="username"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
