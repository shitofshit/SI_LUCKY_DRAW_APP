import { Outlet } from "react-router-dom";
import logo from "../assets/SI_LOGO.png";

function HomePage() {
  return (
    <div
      className="flex flex-column h-screen w-full align-items-center"
      style={{}}
    >
      {/* //image container */}
      <div
        className="flex flex-1 justify-content-center mb-2"
        style={{ width: "20rem", maxHeight: "8rem" }}
      >
        <img src={logo} className="w-full h-full" alt="logo" />
      </div>
      {/* title */}
      <div
        className="text-5xl font-medium"
        style={{ fontFamily: '"Playfair Display", "Times New Roman", serif' }}
      >
        ANNUAL DINNER LUCKY DRAW
      </div>

      {/* Outlet for the lucky draw pages */}
      <Outlet />
    </div>
  );
}

export default HomePage;
