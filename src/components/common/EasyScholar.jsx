import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import boy from "../../media/boy.jpeg";
import "../../styles/easy.css";
import SchlorBox from "./SchlorBox";

function EasyScholar() {
  return (
    <div>
      <Header />
      <div className="lady-1">
        <div className="b1">
          <img className="im1 imshaw" src={boy} alt="st" />
          <div className="text1" style={{ marginLeft: "2rem" }}>
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

export default EasyScholar;
