import { Link } from "react-router-dom";
import { ReactComponent as ContentSvg } from "../../../assets/landing/content-img.svg";
import "../../../styles/app.css";

const LandingPageContent = () => {
  return (
    <div className="landing-content-container">
      <div className="text-container">
        <h3>About Me</h3>
        <div className="span-div">
          <span className="first-span">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </span>
          <span className="second-span">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </span>
        </div>
        <Link to="/about">
          <span>Mor</span>e
        </Link>
      </div>
      <ContentSvg className="content-svg" />
    </div>
  );
};

export default LandingPageContent;
