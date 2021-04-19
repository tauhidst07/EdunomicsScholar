import React, { useState } from "react";
import "../styles/faq.css";
import Header from "./Header";
import Footer from "./Footer";
import HowItWorksHeader from "./HowItWorksHeader";


import FAQs from "./FAQs";

function Faq() {

  function Header1() {
    return (
      <div>
        <Header />
        <HowItWorksHeader  />

<div style={{marginLeft:"5.3rem"}} >
        <header className="faq-header" >
          <h1 className="faq-header"><span style={{color:"blue"}}>Doner</span> FAQs</h1>
          <p>
            Here are the questions most frequently asked by pride.edunomics.in donors.
            <br /> If you don’t see the answer to your question, let us know at
            <a href="mailto:donors@pride.edunomics.in"> donors@pride.edunomics.in</a>.
          </p>
          <p style={{ fontSize: "2rem", fontWeight: 600 }}>Donation Details</p>

        </header>
        



        </div>
      </div>
    );
  }

  return (
    <div className="faqq" style={{ height: "120vh" }}>
      <Header1 />
     
      


      <div className="faqs" style={{marginLeft:'4.4rem'}}>
      
          <FAQs  />
       
      </div>
      
      <Footer />
    </div>
  );
}

export default Faq;
