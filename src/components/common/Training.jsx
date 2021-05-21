import React from "react";
import Header from "../Header";
import "../../styles/training.css";
import Footer from "../Footer";
import { Link, useHistory } from "react-router-dom";
import edu from "../../media/newlogo.png";
import boy from "../../media/im-220805.jpeg";

function Training() {
  return (
    <div>
      <Header appliAc={true} />
      <div className="headertrain topload">
        <div className="hero-section mod-container mod-text-center">
          <div className="logo-image">
            <i className="far fa-gem mod-text-center"></i>
          </div>

          <h1 className="hero-heading">
            SCOUTING FOR INDUSTRY EXPOSURE AT{" "}
            <span style={{ color: "#005d33" }}>EDUNOMICS</span>
          </h1>
          <p className="hero-para">
            An initiative to provide world-className training to 50 talented
            students with serious aspirations to achieve their goal of success
            to work in challenging environment and grow fast
          </p>
          <button style={{ background: "#005d33" }} className="f-btn1">
            Apply Now
          </button>
        </div>
      </div>
      <section>
        <div className="leftside ">
          <img className="imshaw ch" src={boy} />
        </div>
        <div className="vison">
          <h1 className="vis hero-heading">OUR VISION</h1>
          <p className="visp hero-para">
            <span style={{ color: "#005d33", fontWeight: "bold" }}>
              EDUNOMICS{" "}
            </span>
            will bridge the gap Between
          </p>
        </div>
      </section>
      <div>
        <h2 class="hero-heading" style={{ textAlign: "center" }}>
          What{" "}
          <span style={{ color: "#005d33", fontWeight: "bold" }}>
            EDUNOMICS{" "}
          </span>{" "}
          aim's at!
        </h2>
        <div class="services" id="services">
          <div class="max-width">
            <div class="serv-content">
              <div class="card">
                <div class="box">
                  <i class="fas fa-paint-brush"></i>
                  <div class="text">Web Design</div>
                  <p>Job Opportunities at Edunomics or Network Companies</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <i class="fas fa-chart-line"></i>
                  <div class="text">Advertising</div>
                  <p>Real World Experience By working on live projects</p>
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <i class="fas fa-code"></i>
                  <div class="text">Apps Design</div>
                  <p>Interaction with experts to get the basics done clear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sc-box trainnew">
        <div className="sc-head" style={{ marginLeft: "2rem" }}>
          <h3 style={{ marginBottom: "1rem", color: "black" }}>
            Trainings available in Web & Mobile Applications
          </h3>
          <span
            style={{
              color: "black",
              fontWeight: "700",
              fontSize: "1rem",
              letterSpacing: ".1rem",
            }}
          >
            Enlist yourself in courses like
            ReactJs,React-Native,NodeJs,MySQL,CSS,HTML,Flutter and Bootstrap.
          </span>
          <button
            style={{
              background: "#005d33",
              marginLeft: "5rem",
              marginBottom: "1rem",
            }}
            className="f-btn1"
          >
            Apply Now
          </button>
        </div>
      </div>

      <div>
        <div className="social-menu">
          <div
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              marginRight: "6.5rem",
            }}
          >
            <Link to="/" className="logo-main" style={{ cursor: "pointer" }}>
              <img className="log-pic" src={edu} alt="logo" />
            </Link>
          </div>

          <ul>
            <li>
              <a href="">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Training;
