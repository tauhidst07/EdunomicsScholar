import React from "react";
import HowItWorksHeader from "./HowItWorksHeader";
import "../styles/howitworks.css";
import Header from "./Header";
import Footer from "./Footer";
import Anyque from "./Anyque";
import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <div>
      <Header />
      <HowItWorksHeader isActive={true}/>
      <div className='donor-help'>
        <h1>You’re ready to give back.</h1>
        <h1>We’re here to help.</h1>
        <p>Create or contribute to customized awards, with 100% of your donation <br/>going to award recipients.

</p>

      </div>
      <div className='main-tog'>
        <div className='mid-tog'>
<button className='aw-bt'>Create an Award</button>
<button className='aw-bt2'>Contribute</button>

        </div>
      </div>
      <div className="hero-how">
        <div className="hero-imgsec">
          <h2 className="h2-how">Use Donor Credits to expand your impact.</h2>
          <p className="p2-how">
            Increase the value of your existing awards or create new ones with
            Donor Credits, funded by pride.edunomics.in.
          </p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
      <div className="get-start">
        <h1>Get started by creating your donor profile.</h1>
        <Link to ='/login'>
        <button className='get-start button'>Create Your Profile</button>
        
        </Link>
      </div>
      <Anyque />
      <Footer />
    </div>
  );
}

export default HowItWorks;
