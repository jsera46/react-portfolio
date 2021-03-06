import "./styles/app.css";
import { Routes, Route } from "react-router-dom";
import {
  Error404,
  AboutPage,
  ContactPage,
  LandingPage,
  Layout,
  PortfolioPage,
} from "./components/Exporter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfoliopage" element={<PortfolioPage />} />
          <Route path="contactpage" element={<ContactPage />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
