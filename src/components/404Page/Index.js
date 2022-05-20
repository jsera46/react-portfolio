import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/app.css";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/404");
  }, []);

  return (
    <div className="page404-container">
      <div className="col-md-12 div404">
        {/* linkDiv */}
        <div className="linkDiv">
          {/* Bar */}
          <div className="first-bar"></div>

          {/* Icons */}
          <div className="iconsDiv">
            <a
              href="https://github.com/jsera46"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jamar-usman-00a098234/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.onlinejobs.ph/jobseekers/info/1421435"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/oj-logo-icon.png" alt="" />
            </a>
          </div>
          {/* 2nd Bar */}
          <div className="second-bar"></div>
        </div>

        {/*  */}
        <div className="contentClass">
          <label className="label404">404</label>
          <label className="labelContent">
            Woops... Sorry, we are not able to find what you where looking for
          </label>
          <a href="/" className="btn-HomePage">
            Home Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
