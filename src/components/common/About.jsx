import React from "react";
import "../../styles/about.css";
import Header from "../Header";
import Footer from "../Footer";

function About() {
  return (
    <div className="aboutTOP">
      <div className="land-haed2">
        <div className="about" style={{ marginBottom: "1rem" }}>
          <Header />
        </div>
        <div className="hero-about">
          <h2 className="fight">
            Creating growth ecosystem through <br />
            <span style={{ color: "blue" }}> opportunities</span>
          </h2>
          <h1 style={{ marginBottom: "3rem" }}>OUR VISION</h1>
          <p>
            Unlocking the potential of indian young demography though
            motivating, funding and upskilling the masses to lead Indian Dream
          </p>

          <h1 style={{ marginBottom: "3rem" }}>OUR MISSION</h1>

          <p>
            Enable every Indian student to get best of education, training and
            mentoring along with opportunities to work as a part time employee
            to hone his skill so that 90% students are employable from day zero
          </p>
          <br />
          <p>At Edunomics, we believe that’s a problem worth solving.</p>
          <div className="block1">
            <h1 className="head-desc">Unlocking opportunity</h1>
            <p className="undesc">
              The world is full of incredible people who are an opportunity away
              from making a huge positive impact. By enabling anyone and any
              company to create targeted scholarships, fellowships, and grants,
              edunomics.in unlocks that opportunity.
            </p>
          </div>
          <div className="block1">
            <h1 className="head-desc">Broadening access</h1>
            <p>
              Students around the country are taking on huge amounts of debt to
              get access to the education they want and need. By enabling
              students to fund their education through exclusive funding
              opportunities, edunomics.in broadens access to that education in
              an affordable and sustainable way.
            </p>
          </div>
          <div className="block1" style={{ paddingBottom: "3rem" }}>
            <h1 className="head-desc">
              Solving Difficult problem in education and economy{" "}
            </h1>
            <p>
              Empowering student by building alongside students and donors,
              moving quickly, and taking ownership as part of a wonderful remote
              team.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
