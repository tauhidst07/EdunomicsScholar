import React from "react";
import "../../styles/featuresection.css";

function PillTabs({ image, title, subtitle }) {
  return (
    <div className="tabs-section">
      <div className="tabs">
        <div className="tbs-con">
          <img alt="" src={image} className="tab-im" />
        </div>
        <div
          className="text-rigth"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <p
            className="tab-t"
            style={{ fontSize: "30px", fontWeight: "bold", color: "grey" }}
          >
            {title}
          </p>
          <p className="tab-p" style={{ fontSize: "17px", marginTop: "5px" }}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PillTabs;
