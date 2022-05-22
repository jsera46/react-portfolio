import React from "react";
import "../../../styles/app.css";
import background from "../../../assets/landing/contact.png";

const LandingPageContact = () => {
  return (
    <div
      className="landing-contact-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="left-div">
        <span>“A successful website does three things:</span>
        <span>It attracts the right kinds of visitors.</span>
        <span>Guides them to the main services or product you offer.</span>
        <span>Collect Contract details for future ongoing relation. “</span>
      </div>
      <div className="right-div">
        <button type="button">contact</button>
      </div>
    </div>
  );
};

export default LandingPageContact;
