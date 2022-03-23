import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/app.css";
import { Navbar } from "../Exporter";

const Index = () => {
  const location = useLocation();
  location.pathname = "/404";

  return (
    <div
      className="page404"
      style={{ height: 969, width: 1920, overflow: "hidden" }}
    >
      <Navbar />
      <div className="col-md-12 div404">
        {/* linkDiv */}
        <div className="col-md-6 linkDiv">
          {/* Bar */}
          <div className="first-bar"></div>

          {/* Icons */}
          <div className="iconsDiv">
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          {/* 2nd Bar */}
          <div className="second-bar"></div>
        </div>

        {/*  */}
        <div className="col-md-6 contentClass">
          <label className="label404">404</label>
          <label>
            Woops... Sorry, we are not able to find what you where looking for
          </label>
        </div>
      </div>
    </div>
  );
};

export default Index;
