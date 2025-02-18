import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <div className="app-container">
      <Header />
      
        <Outlet />
     

      <Footer />
    </div>
  );
}

export default Layout;
