import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import SchlorBox from "./SchlorBox";
import boy from "../../media/boy.jpeg";
import API_URL from "../../service/url";
function ScholarshipforWomen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${API_URL}applicant/womenScholarships`)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setData(res.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setData({});
        setError("error is there");
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="lady-1">
        <div className="b1">
          <img className="im1" src={boy} alt="st" />
          <div className="text1">
            <h1 className="un-head">
              {data.count} Scholarships Just for Women
            </h1>
            <p className="un-p">
              The Top Scholarships for Women with Deadlines Through 2021
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
