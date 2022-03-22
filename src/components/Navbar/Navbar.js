import React from "react";
import "../../styles/app.css";
import { Link, useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation().pathname;

  return (
    <nav>
      <section className="section-navbar">
        <Link to="/">
          <span className="span-logo">Jamar</span> Portfolio
        </Link>

        {location !== "/404" ? (
          <div>
            <Link
              to="/"
              id="homeLink"
              className={location === "/" ? "home-link active" : "home-link"}
            >
              <span className="span-link-active">Hom</span>e
            </Link>

            <Link
              to="/about"
              id="aboutLink"
              className={
                location === "/about" ? "about-link active" : "about-link"
              }
            >
              <span className="span-link-active">Abou</span>t
            </Link>

            <Link
              to="/portfoliopage"
              id="portfolioLink"
              className={
                location === "/portfoliopage"
                  ? "portfolio-link active"
                  : "portfolio-link"
              }
            >
              <span className="span-link-active">Portfoli</span>o
            </Link>

            <Link
              to="/contactpage"
              id="contactLink"
              className={
                location === "/contactpage"
                  ? "contact-link active"
                  : "contact-link"
              }
            >
              <span className="span-link-active">Contac</span>t
            </Link>
          </div>
        ) : (
          ""
        )}
      </section>
    </nav>
  );
};

export default Index;
