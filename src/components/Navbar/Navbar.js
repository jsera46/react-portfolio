import React from "react";
import "../../styles/app.css";
import { Link, useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  console.log(location);
  return (
    <nav>
      <section className="section-navbar">
        <Link to="/">
          <span>Jamar</span> Portfolio
        </Link>

        {location.pathname !== "/404" ? (
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfoliopage">Portfolio</Link>
            <Link to="/contactpage">Contact</Link>
          </div>
        ) : (
          ""
        )}
      </section>
    </nav>
  );
};

export default Index;
