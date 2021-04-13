import React from "react";
import Header from "./Header";
import st from "../media/st.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function AppliGrantPage() {
  return (
    <div>
      <Header isApplicant={true}/>
      <div className="doner-grant">
        <div className="left-sec">
          <h1 className="left-h1">
            Exclusive Grants and Scholarships, Matched to You
          </h1>
          <p className="left-p">Ready to achieve your potential?</p>
          <Link to="/joinappli" className="grant-btn">
            Apply to Scholarship
          </Link>
          {/* <button className="grant-btn2">How it Works</button> */}
          <div
            className="span-d"
            style={{ display: "flex", marginTop: "2rem" }}
          >
            <p className="per-p1">
              <span> No Spam </span> 100% Free!
            </p>
            {/* <p className="per-p2">
              <span>100%</span> Tax Deductible
            </p> */}
          </div>
          <h1 className="feature">Grants Featured By:</h1>
        </div>
        <div className="right-sec">
          <img className="zahir" src={st} alt="g" />
        </div>
      </div>
      <div className="create1" style={{ marginTop: "2rem" }}>
        <h1>Featured Grants and Scholarships</h1>
        <p>
          Exclusive opportunities, fully managed on pride.edunomics.in. Find opportunities
          for current students and recent graduates at all education levels.
        </p>
        {/* <button>Create a Scholarship</button> */}
      </div>
      <div className="create" style={{ marginTop: "2rem" }}>
        <h1>
          Change lives with scholarships and grants that go directly to the
          recipients you choose.
        </h1>
        <Link to="/joinappli" className="create-button">
          Apply to Scholarship
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default AppliGrantPage;
