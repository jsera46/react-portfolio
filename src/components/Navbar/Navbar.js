import React from "react";
import "../../styles/app.css";
import { Link, useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation().pathname;

  console.log(location);
  return (
    <nav>
      <section className="section-navbar">
        <Link to="/">
          <span className="span-logo">Jamar</span> Portfolio
        </Link>

        {location.pathname !== "/404" ? (
          <div>
            <Link to="/" className="home-link active">
              <span className="span-link-active">Hom</span>e
            </Link>

            <Link to="/about" className="about-link">
              <span className="span-link-active">Abou</span>t
            </Link>

            <Link to="/portfoliopage" className="portfolio-link">
              <span className="span-link-active">Portfoli</span>o
            </Link>

            <Link to="/contactpage" className="contact-link">
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
