import React, { useState, useEffect } from "react";
import edu from "../../media/edu.png";
import { Link, useHistory } from "react-router-dom";

import "../../styles/createschlor.css";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import axios from "axios";
import jwt from "jsonwebtoken";
import Select from "react-select";
// import { getData, getmySchlData } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { postCreateSchol } from "../redux/actions/authAction";



function CreateScholarship() {
  const history = useHistory();
  const dispatch = useDispatch();

  //select dropdown function
  let eligibility = [];

  function Multidrop() {
    var eduName = [
      { value: 1, label: "High School" },
      { value: 2, label: "Graduate" },
      { value: 3, label: "Post Graduate" },
    ];
var [displayValue, getValue] = useState([]);

  useEffect(() => {
    eligibility = displayValue
  },[displayValue])


    var dbHandle = (e) => {
      //getValue(Array.isArray(e) ? e.map((x) => x.label) : []);
      getValue(Array.isArray(e) ? e.map((x) => x.label) : []);
      //console.log(e, 'E');
      //getValue(e)
      //console.log(displayValue);
    };
  /*
    useEffect(() => {
      console.log(displayValue, 'effect//')
    },[displayValue])
  */
    return (
      <div style={{ width: "40%", alignItems: "center" }}>
        <Select isMulti options={eduName} onChange={dbHandle}></Select>
        {displayValue}
      </div>
      // <div style={{ alignItems: "center", display: "flex" }}>
      //   <div className="mldrop">
      //     <h1 style={{ marginBottom: ".6rem" }}> Select education levels</h1>
      //     <Multiselect options={options} displayValue="edu" />
      //   </div>
      // </div>
    );
  }




  const useStyles = makeStyles((theme) => ({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  function ControlledOpenSelect() {
    const classes = useStyles();
    const [age, setAge] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
      setAge(event.target.value);
      console.log(event.target.value);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

    return (
      <div>
        <Multidrop />
        {/* <Button className={classes.button} onClick={handleOpen}>
          Select education levels
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Select</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange}
            name="eligible"
            ref={register}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"High School"}>High School</MenuItem>
            <MenuItem value={"Undergraduate"}>Undergraduate</MenuItem>
            <MenuItem value={"Graduate"}>Graduate</MenuItem>
          </Select>
        </FormControl> */}
      </div>
    );
  }

  // FORM HANDLING -R
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    let encodedToken = localStorage.getItem("token");
    let myId = jwt.decode(encodedToken);
    data.donationAllow = false;
    data.essayNeeded = false;
    data.createdBy = myId._id;
    data.eligible = eligibility;
    let askquiz = data.askedQuiz;
    console.log('ASKQUIZ');
  console.log(askquiz);
    data.askedQuiz = [{
      quiz: [askquiz]
    }]

    console.log("ghghgd", data);
    dispatch(postCreateSchol(data, history));
    // axios
    //   .post("https://bckendapi.herokuapp.com/api/donar/scholarship", data)
    //   .then(function (response) {
    //     console.log(response);
    //     if (response.status === 201) {
    //       history.push("/all-scholar");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      <Link
        to="/donar-dash"
        className="logo-main-head"
        style={{ cursor: "pointer" }}
      >
        <img className="log-pic cr-head" src={edu} alt="logo" />
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="brief-des">
          <div className="des-head">
            <h1>Briefly describe your scholarship</h1>
            <TextareaAutosize
              aria-label="minimum height"
              className="text-area"
              name="description"
              ref={register}
              rowsMin={10}
              placeholder="Our Donor Team will review your idea and get back to you with a full scholarship proposal for your approval, so include as many details as you think would be helpful!"
            />
            ;
          </div>

          <div className="example">
            <p>
              <ErrorOutlineIcon />
              <span>Sample Description</span>
            </p>
            <h6>
              I believe conserving the environment is the most important thing
              for the world right now, and is my philanthropic focus. I’d like
              to support students who plan to spend their careers addressing
              climate change. This mission is personally important to me because
              I always wanted to be an environmental engineer, but took a
              different path for my career.
              <br />
              <br />I want to create a scholarship to give $1000 to one student
              each year who is interested in pursuing environmental studies and
              making a difference in the fight to save the climate.
            </h6>
          </div>
        </div>
        <hr />
        <div className="brief-des">
          <div className="des-head">
            <h1>Briefly describe your ideal applicant</h1>
            <TextareaAutosize
              aria-label="minimum height"
              className="text-area"
              rowsMin={10}
              name="idealApplicant"
              ref={register}
              placeholder="Briefly describe your ideal applicant"
            />
            ;
          </div>

          <div className="example">
            <p>
              <ErrorOutlineIcon />
              <span>Sample Applicant Characteristics</span>
            </p>
            <li>Environmental engineering degree</li>
            <li>Work/internship experience in green-tech</li>

            <li>Underrepresented minority</li>
            <li>First-gen college student</li>
          </div>
        </div>
        <div className="award_scholar">
          <h1>When would you like to award your scholarship?</h1>
          <p>
            Many donors select birthdays, anniversaries, or other personally
            meaningful dates to award their scholarships. The further away your
            award date, the more high quality applications you'll receive! We
            recommend 6-8 months.
          </p>
          <h2 className="uname">Minimum is 3 months from today</h2>
          <input
            name="awardDate"
            ref={register}
            className="u-input"
            type="date"
            data-test="username"
          />
          <h2 className="uname">Deadline</h2>
          <input
            name="deadline"
            ref={register}
            className="u-input"
            type="date"
            data-test="username"
          />
        </div>
        <div className="eligible">
          <h1>Who should be eligible for your scholarship?</h1>
          <ControlledOpenSelect />
        </div>
        <div className="brief-des">
          <div className="des-head">
            <h1>What do you have in mind for the essay prompt?</h1>
            <TextareaAutosize
              aria-label="minimum height"
              className="text-area"
              rowsMin={10}
              name="essayPrompt"
              ref={register}
              placeholder="Applicants will answer this as part of their submission."
            />
            ;
          </div>

          <div className="example">
            <p>
              <ErrorOutlineIcon />
              <span>Sample Essay Prompts</span>
            </p>
            <li>
              What have you learned from the books you read, and how has this
              shaped your goals?
            </li>
            <li>
              How has your experience with mental health influenced your
              beliefs, relationships, and career aspirations?
            </li>

            <li>Why are you passionate about philosophy?</li>
            <li>How are you working to address an important social issue?</li>
          </div>
        </div>
        <div className="mind">
          <h1>Do you have a name in mind for your scholarship?</h1>
          <input
            className="u-input"
            type="text"
            name="name"
            ref={register}
            placeholder="E.g. Minority Women in STEM Scholarship"
          />
        </div>
        <div className="mind">
          <h1 style={{ marginLeft: ".1rem" }}>
            To how many winners would you like to award your scholarship?
          </h1>
          <input
            className="u-input"
            type="text"
            name="winnersLimit"
            ref={register}
            placeholder="E.g. 3"
          />
        </div>
        <div className="mind">
          <h1 style={{ marginLeft: ".1rem" }}>
            How much would you like to award to each winner?
          </h1>
          <input
            className="u-input"
            type="text"
            name="awardAmount"
            ref={register}
            placeholder="Enter amount per winner"
          />
        </div>
        <div className="mind">
          <h1 style={{ marginLeft: ".1rem" }}>Question 1 to Applicant</h1>
          <input
            className="u-input"
            type="text"
            name="askedQuiz"
            ref={register}
            placeholder="question1"
          />
        </div>
        {/* <div className="mind">
          <h1 style={{ marginLeft: ".1rem" }}>Question 2 to Applicant</h1>
          <input
            className="u-input"
            type="text"
            name="question2"
            ref={register}
            placeholder="question2"
          />
        </div> */}
        <button
          className="signin"
          style={{ width: "300px", marginLeft: "30rem", marginTop: "2rem" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateScholarship;
