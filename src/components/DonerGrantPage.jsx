import React from "react";
import "../styles/donergrant.css";
import Header from "./Header";
import schol from "../media/schol.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function DonerGrantPage() {
  return (
    <div>
      <Header isDoner={true} />
      <div className="doner-grant">
        <div className="left-sec">
          <h1 className="left-h1">
            <span>Change</span> Someone’s
            <br />
            <span>Life</span> Today
          </h1>
          <p className="left-p">
            Create scholarships and grants for the people and causes you care
            most about.
          </p>
          <Link to="/joindoner" className="grant-btn">
            Create a Grant
          </Link>
          <button className="grant-btn2">How it Works</button>
          <div
            className="span-d"
            style={{ display: "flex", marginTop: "2rem" }}
          >
            <p className="per-p1">
              <span>100%</span> Goes To Your Recipients
            </p>
            <p className="per-p2">
              <span>100%</span> Tax Deductible
            </p>
          </div>
          <h1 className="feature">Grants Featured By:</h1>
        </div>
        <div className="right-sec">
          <img className="zahir" src={schol} alt="g" />
        </div>
      </div>
      <div className="create1" style={{ marginTop: "2rem" }}>
        <h1>
          Change lives with scholarships and grants that go directly to the
          recipients you choose.
        </h1>
        <p>
          On pride.edunomics.in, anybody and any company can create a customized
          scholarship, fellowship, or grant, in minutes.
        </p>
        {/* <button>Create a Scholarship</button> */}
      </div>
      <div className="create" style={{ marginTop: "2rem" }}>
        <h1>
          Change lives with scholarships and grants that go directly to the
          recipients you choose.
        </h1>
        <Link
          to="/joindoner"
          className="create-button"
          style={{ marginBottom: "1rem" }}
        >
          Create a Scholarship
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default DonerGrantPage;
