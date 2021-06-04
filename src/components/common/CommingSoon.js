import React from 'react'
import Header from "../Header";
import Footer from "../Footer";
import '../../styles/commingSoon.css';

const CommingSoon = () => {
  return (
    <div>
      <Header />
      <div className="commingSoon">
      <h1 className="commingSoon__h1">Comming Soon</h1>
      <p className="commingSoon__p">
        SCOUTING FOR INDUSTRY EXPOSURE AT
      </p>
      </div>
      <Footer />
    </div>
  )
}

export default CommingSoon;
