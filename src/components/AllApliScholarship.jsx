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
import { getAllSchlor } from "../components/redux/actions/authAppliAction";
import { useDispatch, useSelector } from "react-redux";

function AllApliScholarship() {
  const { allSchol, loader } = useSelector((state) => state.authAppli);
  useState(allSchol); 
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSchlor());

    // async function fetchMyApi() {
    //   let response = await fetch(
    //     "https://bckendapi.herokuapp.com/api/applicant/allScholarships"
    //   );
    //   response = await response.json();
    //   setData([response]);
    //   setLoading(false);
    //   console.log(response);

    //   console.log(data);
    // }

    // fetchMyApi();
  }, []);
  return (
    <div>
      <DashboardHeader isActive={true} />
      {loader ? (
        <div style={{ textAlign: "center", alignItems: "center" }}>
          <Loader type="ThreeDots" color="grey" height={100} width={100} />
        </div>
      ) : (
        <div>
          <h1 style={{ marginTop: "2rem", textAlign: "center" }}>
            scholarships {allSchol === 0 ? 0 : allSchol?.count}
          </h1>
          {allSchol === 0
            ? console.log("not fetchedData")
            : allSchol?.scholarships?.reverse().map((e) => (
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
                        to={`/apli-view-scholar/${e._id}`}
                      >
                        Apply to scholarship
                      </Link>
                      <button className="apply-bt2">Nominate a friend</button>
                    </div>
                  </div>

                  <div className="elgi-field sc-box">
                    <div className="field-el">
                      <h2
                        style={{
                          display: "flex",
                          marginRight: ".5rem",
                          paddingRight: ".5rem",
                          alignItems: "center",
                        }}
                      >
                        <LocalConvenienceStoreIcon />
                        .Education level
                      </h2>
                      <p>Any</p>
                    </div>
                    <div className="field-el">
                      <h2
                        style={{
                          display: "flex",
                          marginRight: ".5rem",
                          paddingRight: ".5rem",
                          alignItems: "center",
                        }}
                      >
                        <AttachMoneyIcon />
                        Amount
                      </h2>
                      <p>{e.awardAmount}</p>
                    </div>
                    <div className="field-el">
                      <h2
                        style={{
                          display: "flex",
                          marginRight: ".5rem",
                          paddingRight: ".5rem",
                          alignItems: "center",
                        }}
                      >
                        <CardGiftcardIcon /> .Scholarships awarded
                      </h2>
                      <p>{e.winnersLimit}</p>
                    </div>
                    <div className="field-el">
                      <h2
                        style={{
                          display: "flex",
                          marginRight: ".5rem",
                          paddingRight: ".5rem",
                          alignItems: "center",
                        }}
                      >
                        <CakeIcon />
                        .Deadline
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
