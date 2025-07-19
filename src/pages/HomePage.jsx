import { Outlet } from "react-router-dom";
import logo from "../assets/SI_LOGO.png";

function HomePage() {
  return (
    <div
      className="flex flex-column h-screen w-full align-items-center py-3"
      style={{}}
    >
      {/* //image container */}
      <div
        style={{ width: "16rem", maxHeight: "7rem" }}
      >
        <img src={logo} className="w-full h-full mb-2" alt="logo" />
      </div>
      {/* title */}
      <div
        className="text-5xl font-medium mb-2"
        style={{ fontFamily: '"Playfair Display", "Times New Roman", serif' }}
      >
        ANNUAL DINNER LUCKY DRAW
      </div>

      {/* Outlet for the lucky draw pages */}
      <div className="flex flex-1 w-full">
      <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
