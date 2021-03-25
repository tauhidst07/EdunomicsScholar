import React from "react";
import "../styles/about.css";
import Header from "./Header";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <div className="land-haed2">
        <div className="about" style={{ marginBottom: "1rem" }}>
          <Header />
        </div>
        <div className="hero-about">
          <h1>OUR MISSION</h1>
          <h2 className="fight">
            Fighting <br /> Student Debt
          </h2>
          <p>
            The average student today will graduate more than $30,000 in debt
            and is far less likely to start small businesses, seek the highest
            impact careers, buy homes, or start families.
          </p>
          <br />
          <p>At Edunomics, we believe that’s a problem worth solving.</p>
          <div className="block1">
            <h1>Unlocking opportunity</h1>
            <p>
              The average student today will graduate more than $30,000 in debt
              and is far less likely to start small businesses, seek the highest
              impact careers, buy homes, or start families.
            </p>
          </div>
          <div className="block1">
            <h1>Broadening access</h1>
            <p>
              Students around the country are taking on huge amounts of debt to
              get access to the education they want and need. By enabling
              students to fund their education through exclusive funding
              opportunities, Bold.org broadens access to that education in an
              affordable and sustainable way.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
