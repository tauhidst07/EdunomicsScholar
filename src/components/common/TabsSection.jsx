import React from "react";

function PillTabs({ image, title, subtitle }) {
  return (
    <div className="tabs-section">
      <div className="tabs">
        <div className="tbs-con">
          <img alt="" src={image} className="tab-im" />
        </div>
        <p className="tab-t">{title}</p>
        <p className="tab-p">{subtitle}</p>
      </div>
    </div>
  );
}

export default PillTabs;
