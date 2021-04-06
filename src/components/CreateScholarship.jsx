import React from "react";
import edu from "../media/edu.png";
import { Link } from "react-router-dom";
import "../styles/createschlor.css";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

function CreateScholarship() {
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
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

    return (
      <div>
        <Button className={classes.button} onClick={handleOpen}>
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
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>High School</MenuItem>
            <MenuItem value={20}>Undergraduate</MenuItem>
            <MenuItem value={30}>Graduate</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
  return (
    <div>
      <Link to="/" className="logo-main-head" style={{ cursor: "pointer" }}>
        <img className="log-pic cr-head" src={edu} alt="logo" />
      </Link>
      <div className="brief-des">
        <div className="des-head">
          <h1>Briefly describe your scholarship</h1>
          <TextareaAutosize
            aria-label="minimum height"
            className="text-area"
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
            I believe conserving the environment is the most important thing for
            the world right now, and is my philanthropic focus. I’d like to
            support students who plan to spend their careers addressing climate
            change. This mission is personally important to me because I always
            wanted to be an environmental engineer, but took a different path
            for my career.
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
            Ou
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
          name="dob"
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
            Ou
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
            How has your experience with mental health influenced your beliefs,
            relationships, and career aspirations?
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
          name="email"
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
          name="email"
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
          name="email"
          placeholder="Enter amount per winner"
        />
      </div>
    </div>
  );
}

export default CreateScholarship;
