import React from "react";
import "../styles/contact.css";
import Header from "./Header";
import Footer from "./Footer";

function ContactUs() {
  return (
    <div className="contact-main">
      <Header />
      <div className="loginbox">
        <h1 className="welcome">Have a Question??</h1>
        <p className="sub-touch">
          Whether you're a student, donor, or simply want to learn more, you've
          come to the right place.
        </p>
        <form>
          <p style={{ marginTop: "1rem", fontWeight: 700, fontSize: "1.5rem" }}>
            GET IN TOUCH
          </p>
          <h2 className="uname">Name</h2>
          <input className="u-input" type="text" placeholder="Name" />
          <h2 className="uname">Email</h2>
          <input className="u-input" type="text" placeholder="Email" />
          <h2 className="pass">Message</h2>
          <input className="u-input" type="text" placeholder="Message" />

          <button className="signin" style={{ marginTop: "1rem" }}>
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
