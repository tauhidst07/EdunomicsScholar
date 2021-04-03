import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function ReseacrhReport() {
  return (
    <div>
      <Header />
      <div className="pri-main">
        <h1>Edunomics Research Report</h1>
        <p>
          Up-to-date insights on student debt in the US, based on loans reported
          by more than
        </p>
      </div>
      <div className="pri-main2">
        <p style={{ fontSize: "22px" }}>
          Student loan debt in the United States has reached a staggering $1.6
          trillion, leading to a drop in everything from marriage rates, to
          small business formation, to career ambitions, to savings rates across
          the country.
          <br />
          <br /> To help understand the problem in more detail, we’re sharing
          the results of our proprietary research with Bold.org members, based
          on over 122387 loans reported.
          <br />
          <br /> Do women or men have more student debt? Which states have the
          highest debt per student? Which private lenders offer the lowest
          interest rates? Read on to find insights on this and more!
        </p>
      </div>
      <div className="pri-main pri-main2" style={{ marginTop: "0" }}>
        <h1>Methodology</h1>
        <p>
          Our research team began by interviewing undergraduate and graduate
          students with loans. We asked a series of questions to understand
          their decision-making processes for borrowing, their plans for
          repayment, and their top questions about their loans.
          <br />
          <br /> We then reviewed survey data collected from 122387 Bold.org
          members to surface patterns in student loans. Our survey data
          included:
        </p>
        <li>
          Detailed loan data, including initial loan amount, principal
          remaining, interest rate, lender, and more.
        </li>
        <li>Demographic data, including gender, ethnicity, and location.</li>
        <li>Education data, including degree, school, and years in degree.</li>
        <p>
          Before using survey data, we manually reviewed responses to identify
          and remove any responses that were strong outliers indicative of
          unreliable reporting from respondents. <br />
          <br />
          Finally, we used the resulting 122387-person data set to generate the
          analysis seen in this report.
          <br />
          <br /> To inquire further about our methodology, please email
          edunomics.in
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default ReseacrhReport;
