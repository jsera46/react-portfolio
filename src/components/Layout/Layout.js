import { Outlet, useLocation } from "react-router-dom";
import { Footer, Navbar } from "../Exporter";

const Layout = () => {
  const location = useLocation().pathname;

  return (
    <main className="App">
      <Navbar />
      <Outlet />
      {location !== "/404" ? <Footer /> : null}
    </main>
  );
};

export default Layout;
