import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Press() {
  return (
    <div>
      <Header />
      <div className="pri-main">
        <h1>Edunomics Newsroom</h1>
        <p>
          Press Contact <br />
          Edunomics.in
        </p>
      </div>
      <div className="pri-main2">
        <h1 style={{ marginTop: "2rem" }}>Press Center</h1>
        <p>
          Your privacy is important to you, so it’s important to us. While we
          understand why privacy policies are complicated and include our
          lawyer’s full version below, we’ve also put together the highlights to
          make it easy for you to see how we maintain your privacy.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Press;
