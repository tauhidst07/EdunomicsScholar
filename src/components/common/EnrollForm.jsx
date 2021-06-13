import React, { useState } from "react";
import Modal from "react-modal";
import Footer from "../Footer";
import TextField from "@material-ui/core/TextField";
import edu from "../../media/edu.png";
import { Link } from "react-router-dom";

import "../../styles/enroll.css";
import boy from "../../media/boy.jpeg";

const EnrollForm = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles = {
    content: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      "z-index": "1001",
      background: "#fff",
      overflow: "auto",
      "-webkit-overflow-scrolling": "touch",
      "border-radius": "4px",
      outline: "none",
      "max-width": "700px",
      "max-height": "70%",
      "min-height": "70%",
      padding: "24px 28px 28px",
    },
  };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Link to="/" className="logo-main en-logo" style={{ cursor: "pointer" }}>
        <img className="log-pic" src={edu} alt="logo" />
      </Link>
      <div className="en-head">
        <h2>Connecting Colleges to Best-Fit Students</h2>
        <p>Edunomics matches your admissions team to top student prospects.</p>
        <button
          className="connectus"
          style={{ background: "#005d33" }}
          onClick={openModal}
        >
          Connect with us
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          className="profile__modelContainer"
          tabindex="-1"
          role="dialog"
          aria-label="Edit interest information"
          aria-modal="true"
        >
          <div>
            <div className="profile__modelContainer__header">
              <h3
                style={{ marginBottom: "2rem" }}
                color="text"
                font-size="large"
                font-weight="600"
                class="Title__StyledHeading-sc-14ii9t5-0 jdLSGv"
              >
                We’re excited to meet you!
              </h3>
              <p style={{ marginTop: ".6rem" }}>
                First, we need a few details.
              </p>
              <svg
                onClick={closeModal}
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
              >
                <path
                  d="M1.00136 2.15221C0.60043 1.77238 0.600429 1.15655 1.00136 0.776722L1.04224 0.737998C1.44317 0.358167 2.09321 0.358167 2.49414 0.737997L9.99892 7.84779C10.3999 8.22762 10.3999 8.84345 9.99892 9.22328L9.95805 9.262C9.55712 9.64183 8.90707 9.64183 8.50614 9.262L1.00136 2.15221Z"
                  fill="#6D7B8C"
                ></path>
                <path
                  d="M8.50614 0.737998C8.90707 0.358167 9.55712 0.358166 9.95805 0.737997L9.99892 0.776721C10.3999 1.15655 10.3999 1.77238 9.99892 2.15221L2.49414 9.262C2.09321 9.64183 1.44317 9.64183 1.04224 9.262L1.00136 9.22328C0.60043 8.84345 0.600429 8.22762 1.00136 7.84779L8.50614 0.737998Z"
                  fill="#6D7B8C"
                ></path>
              </svg>
            </div>

            <div>
              <div className="profile__modelContainer__form">
                <div className="profile__modelContainer__formField">
                  <span>First Name</span>
                  <div className="profile__modelContainer__formField__RadioButtonGroup">
                    <TextField id="outlined-basic" variant="outlined" />
                  </div>
                </div>

                <div className="profile__modelContainer__formField">
                  <span>Last Name</span>
                  <div className="profile__modelContainer__formField__RadioButtonGroup">
                    <TextField id="outlined-basic" variant="outlined" />
                  </div>
                </div>

                <div className="profile__modelContainer__formField">
                  <span>Email</span>
                  <div className="profile__modelContainer__formField__RadioButtonGroup">
                    <TextField id="outlined-basic" variant="outlined" />
                  </div>
                </div>

                <div className="profile__modelContainer__formField">
                  <span>Institution</span>
                  <div className="profile__modelContainer__formField__RadioButtonGroup">
                    <TextField id="outlined-basic" variant="outlined" />
                  </div>
                </div>

                <div className="profile__modelContainer__formField">
                  <span>State</span>
                  <div className="profile__modelContainer__formField__RadioButtonGroup">
                    <TextField id="outlined-basic" variant="outlined" />
                  </div>
                </div>
              </div>
            </div>

            <div className="profile__saveChangesContainer ">
              <button style={{ background: "#005d33" }}>Submit</button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="lady-1">
        <div className="b1">
          <img className="im1 imshaw" src={boy} alt="st" />
          <div className="text1" style={{ marginLeft: "2rem" }}>
            <h1 className="un-head">
              Do the best work of your career, from anywhere.
            </h1>
            <p className="un-p">
              We’re growing quickly at the intersection of education and
              philanthropy and hiring amazing people who love to move fast, take
              ownership of difficult problems, and learn on the fly.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EnrollForm;
