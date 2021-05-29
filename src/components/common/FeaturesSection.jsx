import React, { useState } from "react";
import FeatureImg1 from "../../media/real-time-collaboration.svg";
import FeatureImg2 from "../../media/Audit-log.svg";
import FeatureImg3 from "../../media/connected-maps.svg";
import FeatureImg4 from "../../media/Download in any format.svg";
import FeatureImg5 from "../../media/Cloud-storage.svg";
import PillTabs from "./TabsSection";
import "../../styles/featuresection.css";

export default function Features() {
  const [collaboration, setCollaboration] = useState(true);
  const [maps, setMaps] = useState(false);
  const [format, setFormat] = useState(false);
  const [template, setTemplate] = useState(false);
  const [interfaced, setInterfaced] = useState(false);
  // const [fixColor, setfixColor] = useState(false);
  return (
    <section className="Features" style={{ marginLeft: "9rem" }}>
      <div
        className="row-features"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="fe-sec">
          <div className="tab-content">
            {collaboration ? (
              <PillTabs
                id="#v-pills-tab-1"
                image={FeatureImg1}
                title="Designed for collaboration"
                subtitle="Comments and discussions in a project"
              />
            ) : (
              <></>
            )}
            {maps ? (
              <PillTabs
                id="#v-pills-tab-2"
                image={FeatureImg3}
                title="Connected maps"
                subtitle="Avoid confusion and duplication by linking journey maps with persona, empathy and business model canvas"
              />
            ) : (
              <></>
            )}
            {format ? (
              <PillTabs
                id="#v-pills-tab-3"
                image={FeatureImg4}
                title="Export maps in multiple formats"
                subtitle="Export to PDF, PNG or CSV and Create impactful presentations."
              />
            ) : (
              <></>
            )}
            {template ? (
              <PillTabs
                id="#v-pills-tab-4"
                image={FeatureImg2}
                title="House of templates"
                subtitle="Designed by industry professionals with beautiful preset themes to jump start"
              />
            ) : (
              <></>
            )}
            {interfaced ? (
              <PillTabs
                id="#v-pills-tab-5"
                image={FeatureImg5}
                title="Simple and flexible interface"
                subtitle="Straight forward, intuitive and configurable layout"
              />
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="tabsec">
          <div className="tabsec-in" role="tablist" aria-orientation="vertical">
            <div className="text-mains">
              {/* <h2 className={`how-it-works ${isaward ? "activeRoute" : ""} `}>
                Award Features
              </h2> */}
              <h5
                className={`${collaboration ? "activeR texttab" : "texttab"}`}
                // className="activeR texttab"
                onClick={() => {
                  setCollaboration(true);

                  setMaps(false);
                  setFormat(false);
                  setTemplate(false);
                  setInterfaced(false);
                }}
              >
                Designed for collaboration
              </h5>
            </div>

            <h5
              className={`${maps ? "activeR texttab" : "texttab"}`}
              onClick={() => {
                setCollaboration(false);
                setMaps(true);
                setFormat(false);
                setTemplate(false);
                setInterfaced(false);
              }}
            >
              {" "}
              Connected maps{" "}
            </h5>

            <h5
              className={`${format ? "activeR texttab" : "texttab"}`}
              onClick={() => {
                setCollaboration(false);
                setMaps(false);
                setFormat(true);
                setTemplate(false);
                setInterfaced(false);
              }}
            >
              Export maps in multiple formats
            </h5>

            <h5
              className={`${template ? "activeR texttab" : "texttab"}`}
              onClick={() => {
                setCollaboration(false);
                setMaps(false);
                setFormat(false);
                setTemplate(true);
                setInterfaced(false);
              }}
            >
              House of templates
            </h5>

            <h5
              className={`${interfaced ? "activeR texttab" : "texttab"}`}
              onClick={() => {
                setCollaboration(false);
                setMaps(false);
                setFormat(false);
                setTemplate(false);
                setInterfaced(true);
              }}
            >
              {" "}
              Simple and flexible interface
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
