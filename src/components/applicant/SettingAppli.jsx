import React, { useState, useEffect } from "react";

import DashboardHeader from "../DashboardHeader";
import Modal from "react-modal";
import TextField from "@material-ui/core/TextField";
import RoomIcon from "@material-ui/icons/Room";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import "../../styles/settingdonar.css";
import ContactInfoUpdate from "../ContactInfoUpdate";

function SettingAppli() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const history = useHistory();
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
      <DashboardHeader />
      <div>
        <div className="set-head">
          <h1>Settings</h1>
        </div>
        <div className="set-ac">
          <div className="set-left">
            <button className="set-bt1">
              <PersonIcon /> Account
            </button>
            <button className="set-bt2" onClick={() => setHide(!hide)}>
              <RoomIcon /> Contact Info
            </button>
          </div>
          <div className="set-right">
            <h1>Password</h1>
            <button onClick={openModal}>Change Password</button>
          </div>
        </div>
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
                Edit Password
              </h3>
              <p style={{ marginTop: ".6rem" }}></p>
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
                  <span>Current Password</span>
                  <div className="profile__modelContainer__formField__RadioButtonGroup">
                    <TextField id="outlined-basic" variant="outlined" />
                  </div>
                </div>

                <div className="profile__modelContainer__formField">
                  <span>New Password</span>
                  <div className="profile__modelContainer__formField__RadioButtonGroup">
                    <TextField id="outlined-basic" variant="outlined" />
                  </div>
                </div>

                <div className="profile__modelContainer__formField">
                  <span>Confirm New Password</span>
                  <div className="profile__modelContainer__formField__RadioButtonGroup">
                    <TextField id="outlined-basic" variant="outlined" />
                  </div>
                </div>
              </div>
            </div>

            <div className="profile__saveChangesContainer ">
              <button>Save Changes</button>
            </div>
          </div>
        </div>
      </Modal>
      {hide ? <ContactInfoUpdate /> : null}
    </div>
  );
}

export default SettingAppli;
