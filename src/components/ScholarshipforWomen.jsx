import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SchlorBox from "./SchlorBox";

function ScholarshipforWomen() {
  return (
    <div>
      <Header />
      <div className="lady-1">
        <div className="b1">
          <img className="im1" src={boy} alt="st" />
          <div className="text1">
            <h1 className="un-head">
              22 Easy Scholarships with Upcoming Deadlines
            </h1>
            <p className="un-p">
              The Top Easy, No-Essay Scholarships With Upcoming Deadlines
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
