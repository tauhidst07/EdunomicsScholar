import React, { useState } from "react";
import "../styles/faq.css";
import Header from "./Header";
import Footer from "./Footer";
import HowItWorksHeader from "./HowItWorksHeader";

// import { AiOutlinePlus } from "react-icons/ai";
// import { AiOutlineMinusCircle } from "react-icons/ai";
import FAQs from "./FAQs";

function Faq() {
  const [faqs, setfaqs] = useState([
    {
      question: "Are award contributions tax deductible?",
      answer:
        "Yes! Donations are made to the Bold Foundation, a 501(c)(3) non-profit (Federal Tax ID #84-2719715). When your donation is processed, you’ll receive an email with documentation confirming your tax-deductible donation.",
      open: true,
    },
    {
      question: "How long does it take for donations to process?",
      answer:
        "Donations made by credit card process right away. Donations made by ACH can take 3-5 business to process..",
      open: false,
    },
    {
      question: "How do I know how my donation will be used?",
      answer:
        "100% of your tax-deductible donation will go to your recipient, and will typically be either applied directly to their tuition or directly to their student loans. In cases where you’ve specified your award to go towards an educational experience, we require documentation from the recipient that the award has been used for eligible expenses.",
      open: false,
    },
  ]);
  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  function Header1() {
    return (
      <div>
        <Header />

        <header className="faq-header">
          <HowItWorksHeader />
          <h1 className="faq-header">Doner FAQs</h1>
          <p>
            Here are the questions most frequently asked by pride.edunomics.in donors.{" "}
            <br /> If you don’t see the answer to your question, let us know at{" "}
            <a href="mailto:donors@pride.edunomics.in">donors@pride.edunomics.in</a>.
          </p>
          <p style={{ fontSize: "2rem", fontWeight: 600 }}>Donation Details</p>
        </header>
      </div>
    );
  }

  return (
    <div className="faqq" style={{ height: "120vh" }}>
      <Header1 />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQs faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
