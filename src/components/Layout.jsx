import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";


const Layout = () => {
  return (
    <div className="container my-3">
      <NavBar />

      <Outlet />
    </div>
  );
};

export default Layout;
