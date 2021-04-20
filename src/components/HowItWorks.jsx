import React, { useState } from "react";
import HowItWorksHeader from "./HowItWorksHeader";
import "../styles/howitworks.css";
import Header from "./Header";
import Footer from "./Footer";
import Anyque from "./Anyque";
import { Link } from "react-router-dom";
import pic1 from "../media/award-1.png";
import pic2 from "../media/award-2.png";
import pic3 from "../media/award-3.png";

function HowItWorks() {
  const [createAward, setCreateAward] = useState(true);
  const [createAward2, setCreateAward2] = useState(false);

  return (
    <div>
      <Header />
      <HowItWorksHeader />
      <div className="donor-help">
        <h1>You’re ready to give back.</h1>
        <h1>We’re here to help.</h1>
        <p>
          Create or contribute to customized awards, with 100% of your donation{" "}
          <br />
          going to award recipients.
        </p>
      </div>
      <div className="main-tog">
        <div className="mid-tog">
          <button
            className={`${createAward ? "aw-bt activebutton" : " aw-bt"}`}
            onClick={() => {
              setCreateAward(true);
              setCreateAward2(false);
            }}
          >
            Create an Award
          </button>
          <button
            className={`${createAward2 ? "aw-bt2 activebutton" : "aw-bt2 "}`}
            onClick={() => {
              setCreateAward(false);
              setCreateAward2(true);
            }}
          >
            Contribute
          </button>
        </div>
      </div>
      {createAward ? (
        <div>
          <div className="define-block">
            <img src={pic1} />
            <div className="define-head">
              <h1>1. Define and fund your award.</h1>
              <p>
                Creating an award on Edunomics is easy. You tell us what you
                want.
                <span style={{ font: "bold", fontWeight: "700" }}>
                  We do the heavy lifting.
                </span>
              </p>
              <p style={{ marginTop: ".6rem" }}>
                And you have{" "}
                <span style={{ font: "bold", fontWeight: "700" }}>
                  complete control
                </span>{" "}
                over what applicants submit, and how involved you want to be in
                the process.
              </p>
            </div>
          </div>
          <div className="define-block">
            <img src={pic2} />
            <div className="define-head">
              <h1>2. We'll create a shortlist of the best applications.</h1>
              <p>
                Based on your criteria,
                <span style={{ font: "bold", fontWeight: "700" }}>
                  we'll review all the applications and mark the best ones for
                  you.
                </span>
              </p>
              <br />
              <p>
                Of the hundreds who will apply, we’ll indicate the top 10-20 who
                are the closest fit.
              </p>
            </div>
          </div>
          <div className="define-block">
            <img src={pic3} />
            <div className="define-head">
              <h1>3. Hand-select your finalists and winners.</h1>
              <p>
                Once you select your winners,
                <span style={{ font: "bold", fontWeight: "700" }}>
                  100% of your tax-deductible gift
                </span>{" "}
                will go directly to the recipients.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {createAward2 ? (
        <div>
          <div className="define-block">
            <img src={pic1} />
            <div className="define-head">
              <h1>
                1. Select an existing award on Edunomics you’d like to help
                fund.
              </h1>
              <p>
                With scholarships, fellowships, and grants across dozens of
                focus areas, selecting an award that resonates is easy.
              </p>
            </div>
          </div>
          <div className="define-block">
            <img src={pic2} />
            <div className="define-head">
              <h1>
                2. Select how much you’d like to donate to each award winner.
              </h1>
              <p>
                Once you find an award you want to support, simply indicate how
                much you want to donate to each winner.
              </p>
            </div>
          </div>
          <div className="define-block">
            <img src={pic3} />
            <div className="define-head">
              <h1>3. We’ll handle the rest.</h1>
              <p>
                Once winners are selected, 100% of your tax-deductible
                contribution will go directly to the recipients.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="hero-how">
        <div className="hero-imgsec">
          <h2 className="h2-how">Use Donor Credits to expand your impact.</h2>
          <p className="p2-how">
            Increase the value of your existing awards or create new ones with
            Donor Credits, funded by pride.edunomics.in.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
      <div className="get-start">
        <h1>Get started by creating your donor profile.</h1>
        <Link to="/login">
          <button className="get-start button">Create Your Profile</button>
        </Link>
      </div>
      <Anyque />
      <Footer />
    </div>
  );
}

export default HowItWorks;
