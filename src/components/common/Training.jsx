import React from "react";
import Header from "../Header";
import "../../styles/training.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import edu from "../../media/newlogo.png";
import boy from "../../media/im-220805.jpeg";
import SectionStep from "./SectionStep";
import Features from "./FeaturesSection";

function Training() {
  return (
    <div>
      <Header appliAc={true} />
      <section style={{ marginTop: "3rem" }}>
        <div className="vison">
          <h1 className="vis hero-heading imshaw">
            OUR{" "}
            <span style={{ color: "#005d33", fontWeight: "bold" }}>VISION</span>
          </h1>
          <p className="visp hero-para">
            <span style={{ color: "#005d33", fontWeight: "bold" }}>
              EDUNOMICS{" "}
            </span>
            will bridge the gap Between
          </p>
        </div>
        <div className="leftside ">
          <img className="imshaw ch" src={boy} />
        </div>
      </section>
      <div className="headertrain topload">
        <div className="hero-section mod-container mod-text-center">
          <div className="logo-image ">
            <i className="far fa-gem mod-text-center"></i>
          </div>

          <h1 className="hero-heading ">
            SCOUTING FOR INDUSTRY EXPOSURE AT{" "}
            <span style={{ color: "#005d33" }}>EDUNOMICS</span>
          </h1>
          <p className="hero-para">
            An initiative to provide world-className training to 50 talented
            students with serious aspirations to achieve their goal of success
            to work in challenging environment and grow fast
          </p>
          <Link to="/joinappli">
            <button
              style={{ background: "#005d33", width: "140px" }}
              className="f-btn1"
            >
              Apply Now
            </button>
          </Link>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2 className="hero-heading " style={{ textAlign: "center" }}>
          HOW DOES IT
          <span
            style={{ color: "#005d33", fontWeight: "bold", marginLeft: "5px" }}
          >
            WORK?
          </span>
        </h2>
        <div className="services" id="services">
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="text">6 Weeks Long</div>
                <p>
                  Set and maintain flexible deadlines. No prior experience
                  required
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-chart-line"></i>
                <div className="text">12 Hours a day</div>
                <p>3 Hours theory,9 hours practical training.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">24/7 Contact</div>
                <p>
                  Stuck? Connect with us anytime Get guidance from experts on
                  various platforms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="hero-heading" style={{ textAlign: "center" }}>
          What{" "}
          <span style={{ color: "#005d33", fontWeight: "bold" }}>
            EDUNOMICS{" "}
          </span>{" "}
          aim's at!
        </h2>
        <div className="services" id="services">
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="text">Web Design</div>
                <p>Job Opportunities at Edunomics or Network Companies</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-chart-line"></i>
                <div className="text">Advertising</div>
                <p>Real World Experience By working on live projects</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">Apps Design</div>
                <p>Interaction with experts to get the basics done clear</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sc-box trainnew ">
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
          <Link to="/joinappli">
            <button
              style={{
                background: "#005d33",
                width: "140px",
                marginLeft: "5rem",
                marginBottom: "1.5rem",
              }}
              className="f-btn1"
            >
              Apply Now
            </button>
          </Link>
        </div>
      </div>
      <SectionStep />
      <Features />
      <div className="container-im">
        <div className="logo-im"></div>
        <h1 className="lg-name"> Rakesh kumar </h1>
        <h3 className="lg-br">
          ME Grad
          <span style={{ color: "green", marginRight: ".3rem" }}>|</span>
          Enthusiast
        </h3>
        <p className="bio-im">
          I think of myself as possessing a critical, dynamic and perpetual
          intelligence which I intend to allow it to operate.
        </p>
        <p className="social-im">
          <a title="Facebook" target="_blank" href="">
            <i className=" s-btn fab fa-facebook-f"></i>
          </a>
          <a title="Instagram" target="_blank" href="">
            <i className="s-btn fab fa-instagram"></i>
          </a>
          <a title="Twitter" target="_blank" href="">
            <i className="s-btn fab fa-twitter"></i>
          </a>
          <a title="Codepen" target="_blank" href="">
            <i className="s-btn fab fa-codepen"></i>
          </a>
          <a title="Linkedin" target="_blank" href="">
            <i className="s-btn fab fa-linkedin-in"></i>
          </a>
        </p>
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
