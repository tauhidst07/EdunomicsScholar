import React from "react";
import "../../styles/featuresection.css";

function PillTabs({ image, title, subtitle }) {
  return (
    <div className="tabs-section">
      <div className="tabs">
        <div className="tbs-con">
          <img alt="" src={image} className="tab-im" />
        </div>
        <div className="text-rigth">
          <p className="tab-t">{title}</p>
          <p className="tab-p">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default PillTabs;
