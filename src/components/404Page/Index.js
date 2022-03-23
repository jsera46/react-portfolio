import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/app.css";
import { Navbar } from "../Exporter";

const Index = () => {
  const location = useLocation();
  location.pathname = "/404";

  return (
    <>
    <Navbar />
    <div className="div404">
      <div className="col-md-12">
        {/* linkDiv */}
        <div className="col-md-6 linkDiv">
          {/* Bar */}
          <div className="first-bar"></div>

          {/* Icons */}
          <div className="iconsDiv">
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
          </div>
          {/* 2nd Bar */}
          <div className="second-bar"></div>
        </div>

        {/*  */}
        {/* <div className="col-md-6">
          <div className="contentClass" >
            <label>404</label>
            <label>Woops... Sorry, we are not able to find what you where looking for</label>
          </div>
        </div> */}
      </div>
    </div>
    </>
  );
};

export default Index;
