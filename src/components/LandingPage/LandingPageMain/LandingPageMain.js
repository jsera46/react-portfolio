import React from "react";
import "../../../styles/app.css";


import { ReactComponent as MainSvg } from "../../../assets/images/landing/main-img.svg";
import { ReactComponent as MainVector } from "../../../assets/images/landing/main-vector.svg";


const LandingPageMain = () => {
  return (
    <div className="landing-main-container">
      <div className="container1">
        <div className="upline" />
        <div className="links-container">
          <a href="https://github.com/jsera46" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jamar-usman-00a098234/"
            target="_blank="
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/jamarusman10"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com/jamar_usman"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="downline" />
      </div>
      <div className="container2">
        <span className="span-title">Jamar Usman</span>
        <span className="span-title">
          Front-end | Back-end <span className="dev-span">Developer</span>
        </span>
      </div>
      <div className="container3">
        <MainSvg className="main-img" />
      </div>

      <MainVector className="vector" />
    </div>
  );
};

export default LandingPageMain;
