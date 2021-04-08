import React from "react";

function ContactInfoUpdate() {
  return (
    <div className="contact-conatiner">
      <div className="contact-info">
        <h1>Contact information</h1>
        <p>
          Keep your info up-to-date to unlock scholarships and other rewards.
        </p>
        <div className="con-1st">
          <p>Street Address</p>
          <input placeholder="Example: 855 Border Lane" />
        </div>
        <div className="con-1st">
          <p>City & State</p>
          <input placeholder="Enter address" />
        </div>
        <div className="con-1st">
          <p>ZIP Code</p>
          <input placeholder="Example: 37011" />
        </div>
        <div className="con-1st">
          <p>Phone number</p>
          <input />
        </div>
        <button>Save changes</button>
      </div>
    </div>
  );
}

export default ContactInfoUpdate;
