import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SchlorBox from "./SchlorBox";
import boy from "../media/boy.jpeg";

function ScholarshipforWomen() {
  return (
    <div>
      <Header />
      <div className="lady-1">
        <div className="b1">
          <img className="im1" src={boy} alt="st" />
          <div className="text1">
            <h1 className="un-head">6 Scholarships Just for Women</h1>
            <p className="un-p">
              The Top Scholarships for Women with Deadlines Through 2021
            </p>
          </div>
        </div>
      </div>
      <SchlorBox />
      <SchlorBox />

      <SchlorBox />

      <SchlorBox />

      <Footer />
    </div>
  );
}

export default ScholarshipforWomen;
