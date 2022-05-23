import React from "react";
import "../../../styles/app.css";
import { Link } from "react-router-dom";
import Upper from "../../../assets/landing/upper-column.png";
import Lower from "../../../assets/landing/lower-column.png";

const LandingPagePortfolio = () => {
  return (
    <div className="landing-portfolio-container">
      <div className="upper-realm" style={{ background: `url(${Upper})` }} />
      <div className="content-container">
        <div className="left-div">
          <div className="upper-column" />
          <div className="left-project-container">
            <div className="left-container">
              <div className="project-1" />
              <div className="project-2" />
            </div>
            <div className="right-container">
              <div className="project-3" />
            </div>
          </div>
          <Link to={"/portfoliopage"}>
            <span>MOR</span>E
          </Link>
        </div>
        <div className="right-div">
          <span>Portfolio</span>
          <div className="right-project-container">
            <div className="top-container">
              <div className="project-1" />
            </div>
            <div className="bottom-container">
              <div className="project-2" />
              <div className="project-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="lower-realm" style={{ background: `url(${Lower})` }} />
    </div>
  );
};

export default LandingPagePortfolio;
