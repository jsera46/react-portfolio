import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/app.css";
import { Footer, Navbar } from "../Exporter";

const Index = () => {
  const location = useLocation();
  location.pathname = "/404";
  return (
    <>
      <Navbar />
      404Page Component
      <Footer />
    </>
  );
};

export default Index;
