import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import girl from "../media/girl.jpg";
import boy from "../media/boy.jpeg";
import "../styles/careers.css";
import globe from "../media/globe.png";
import health from "../media/healthcare.png";
import rocket from "../media/rocket.png";
import mount from "../media/mountain.png";

function Careers() {
  return (
    <div>
      <Header />
      <div
        className="lady-1"
        style={{ backgroundColor: "grey", marginTop: "1rem" }}
      >
        <div className="b1">
          <div className="text1" style={{ marginRight: "2rem" }}>
            <h1 className="un-head">Join the Fight Against Student Debt</h1>
            <p className="un-p">
              The average college graduate has $30k+ in debt and is far less
              likely to start a business, pursue a dream career, buy a home, and
              more.
            </p>
            <button
              className="cr-button"
              style={{
                textAlign: "center",
                marginTop: "2rem",
                backgroundColor: "black",
              }}
            >
              View 8 positions
            </button>
          </div>
          <img className="im1" src={girl} alt="st" />
        </div>
      </div>
      <div className="lady-1" style={{ backgroundColor: "grey" }}>
        <div className="b1">
          <img className="im1" src={boy} alt="st" />
          <div className="text1">
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
      <div className="ben" style={{ backgroundColor: "grey" }}>
        <h1>Benefits</h1>
        <div className="ben-big">
          <div className="ben-1" style={{ marginLeft: "1rem" }}>
            <img className="gl1" src={globe} alt="st" />
            <h2>Work from Anywhere</h2>
            <p>Our global team is 100% remote and spans 4 continents.</p>
          </div>
          <div className="ben-1">
            <img className="gl1" src={health} alt="st" />
            <h2>Healthcare benefits</h2>
            <p>Coverage includes health and dental.</p>
          </div>
        </div>
        <div className="ben-big" style={{ paddingBottom: "2rem" }}>
          <div className="ben-1" style={{ marginLeft: "1rem" }}>
            <img className="gl1" src={rocket} alt="st" />
            <h2>Early Stage</h2>
            <p>
              Move fast and take ownership as part of a lean, growth-minded
              team.
            </p>
          </div>
          <div className="ben-1">
            <img className="gl1" src={mount} alt="st" />
            <h2>Mission Driven</h2>
            <p>
              Help hundreds of thousands of students get closer to their goals
              on a daily basis.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Careers;
