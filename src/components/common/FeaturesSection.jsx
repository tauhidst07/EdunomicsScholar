import React from "react";
import FeatureImg1 from "../../media/real-time-collaboration.svg";
import FeatureImg2 from "../../media/Audit-log.svg";
import FeatureImg3 from "../../media/connected-maps.svg";
import FeatureImg4 from "../../media/Download in any format.svg";
import FeatureImg5 from "../../media/Cloud-storage.svg";
import PillTabs from "./TabsSection";

export default function Features() {
  return (
    <section className="Features">
      <div className="row">
        <div className="col-12 col-md-8">
          <div className="tab-content" id="v-pills-tabContent">
            <PillTabs
              index="1"
              image={FeatureImg1}
              title="Designed for collaboration"
              subtitle="Comments and discussions in a project"
            />
            <PillTabs
              index="2"
              image={FeatureImg3}
              title="Connected maps"
              subtitle="Avoid confusion and duplication by linking journey maps with persona, empathy and business model canvas"
            />
            <PillTabs
              index="3"
              image={FeatureImg4}
              title="Export maps in multiple formats"
              subtitle="Export to PDF, PNG or CSV and Create impactful presentations."
            />
            <PillTabs
              index="4"
              image={FeatureImg2}
              title="House of templates"
              subtitle="Designed by industry professionals with beautiful preset themes to jump start"
            />

            <PillTabs
              index="5"
              image={FeatureImg5}
              title="Simple and flexible interface"
              subtitle="Straight forward, intuitive and configurable layout"
            />
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-1"
              data-toggle="pill"
              href="#v-pills-tab-1"
              role="tab"
              aria-controls="v-pills-home"
            >
              <h5>Designed for collaboration</h5>
            </a>
            <a
              className="nav-link"
              id="v-pills-2"
              data-toggle="pill"
              href="#v-pills-tab-2"
              role="tab"
              aria-controls="v-pills-messages"
            >
              <h5> Connected maps </h5>
            </a>
            <a
              className="nav-link"
              id="v-pills-3"
              data-toggle="pill"
              href="#v-pills-tab-3"
              role="tab"
              aria-controls="v-pills-settings"
            >
              <h5>Export maps in multiple formats</h5>
            </a>
            <a
              className="nav-link"
              id="v-pills-4"
              data-toggle="pill"
              href="#v-pills-tab-4"
              role="tab"
              aria-controls="v-pills-settings"
            >
              <h5>House of templates</h5>
            </a>

            <a
              className="nav-link"
              id="v-pills-5"
              data-toggle="pill"
              href="#v-pills-tab-5"
              role="tab"
              aria-controls="v-pills-settings"
            >
              <h5> Simple and flexible interface</h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
