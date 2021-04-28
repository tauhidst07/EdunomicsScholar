import React from "react";
import boy from "../../media/boy.jpeg";

function SchlorBox() {
  return (
    <div>
      <div className="sc-box " style={{ boxShadow: "0 8px 6px -6px black" }}>
        <img src={boy} alt="st" />
        <div className="sc-head">
          <h3>Smart Borrower No-Essay Scholarship & Loan Forgiveness Grant</h3>
          <span>Funded by</span>
          <p>
            Become eligible for this scholarship by showcasing that you know how
            to navigate your student loan options.
          </p>
        </div>
        <div className="apply">
          <button className="apply-bt1">Apply to scholarship</button>
          <button className="apply-bt2">Contribute</button>
        </div>
      </div>
    </div>
  );
}

export default SchlorBox;
