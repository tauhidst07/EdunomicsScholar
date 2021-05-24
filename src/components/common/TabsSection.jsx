import React from "react";

function PillTabs({ image, index, title, subtitle }) {
  return (
    <div
      className={`tab-pane fade show ${index === "1" && "active"}`}
      id={`v-pills-tab-${index}`}
      role="tabpanel"
      aria-labelledby={`v-pills-${index}`}
    >
      <div className="d-flex flex-column col-lg-10 col-12 align-items-center text-center justify-content-center mx-auto p-0">
        <div
          className={`d-flex col-lg-10 col-12 col-md-12 features-container key-feature-image-container py-5 px-3 v-pills-bg-${index}`}
        >
          <img
            alt=""
            src={image}
            className="overview-image key-feature-image px-4"
          />
        </div>
        <p className="h2 my-3 font-weight-regular">{title}</p>
        <p className="text-center">{subtitle}</p>
      </div>
    </div>
  );
}

export default PillTabs;
