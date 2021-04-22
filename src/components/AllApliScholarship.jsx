import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import boy from "../media/boy.jpeg";
import LocalConvenienceStoreIcon from "@material-ui/icons/LocalConvenienceStore";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import CakeIcon from "@material-ui/icons/Cake";
import DashboardHeader from "./DashboardHeader";
import Footer from "./Footer";
import Loader from "react-loader-spinner";

function AllApliScholarship() {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyApi() {
      let response = await fetch(
        "https://bckendapi.herokuapp.com/api/applicant/allScholarships"
      );
      response = await response.json();
      setData([response]);
      setLoading(false);

      // console.log(data)
    }

    fetchMyApi();
  }, []);
  return (
    <div>
      <DashboardHeader isActive={true} />
      {loading ? (
        <div style={{ textAlign: "center", alignItems: "center" }}>
          <Loader type="ThreeDots" color="grey" height={100} width={100} />
        </div>
      ) : (
        <div>
          <h1 style={{ marginTop: "2rem", textAlign: "center" }}>
            scholarships {data === 0 ? 0 : data[0].count}
          </h1>
          {data === 0
            ? console.log("not fetched")
            : data[0].scholarships.map((e) => (
                <div key={e._id} className="main-boxshadow ">
                  <div className="sc-box ">
                    <img src={boy} alt="st" />
                    <div className="sc-head">
                      <h3>{e.name}</h3>
                      <span>Funded by</span>
                      <p>
                        Become eligible for this scholarship by showcasing that
                        you know how to navigate your student loan options.
                      </p>
                    </div>

                    <div className="apply">
                      <Link
                        className="apply-bt1"
                        to={`/apli-view-scholar/${e._id}&${e.createdBy}`}
                      >
                        Apply to scholarship
                      </Link>
                      <button className="apply-bt2">Nominate a friend</button>
                    </div>
                  </div>

                  <div className="elgi-field sc-box">
                    <div className="field-el">
                      <h2>
                        <LocalConvenienceStoreIcon />
                        Education level
                      </h2>
                      <p>Any</p>
                    </div>
                    <div className="field-el">
                      <h2>
                        <AttachMoneyIcon />
                        Amount
                      </h2>
                      <p>{e.awardAmount}</p>
                    </div>
                    <div className="field-el">
                      <h2>
                        <CardGiftcardIcon /> Scholarships awarded
                      </h2>
                      <p>{e.winnersLimit}</p>
                    </div>
                    <div className="field-el">
                      <h2>
                        <CakeIcon />
                        Deadline
                      </h2>
                      <p>
                        <span>
                          {
                            new Date(e.awardDate.toString())
                              .toString()
                              .split(" ")[1]
                          }
                          -
                        </span>
                        <span style={{ marginLeft: ".1rem" }}>
                          {
                            new Date(e.awardDate.toString())
                              .toString()
                              .split(" ")[2]
                          }
                        </span>
                        -
                        <span style={{ marginLeft: ".1rem" }}>
                          {
                            new Date(e.awardDate.toString())
                              .toString()
                              .split(" ")[3]
                          }
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default AllApliScholarship;
