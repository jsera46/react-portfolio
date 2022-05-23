import React from "react";
import "../../styles/app.css";
import LandingPageMain from "./LandingPageMain/LandingPageMain";
import LandingPageContent from "./LandingPageContent/LandingPageContent";
import LandingPageContact from "./LandingPageContact/LandingPageContact";
import LandingPagePortfolio from "./LandingPagePortfolio/LandingPagePortfolio";

const Index = () => (
  <>
    <LandingPageMain />
    <LandingPageContent />
    <LandingPageContact />
    <LandingPagePortfolio />
  </>
);

export default Index;
