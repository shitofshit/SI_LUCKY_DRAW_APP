import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/SI_LOGO.png";
import backgroundImage from "../assets/BACKGROUND_IMG.jpg";
import { PAGES_CONFIG } from "../Constant";

function HomePage() {
  const navigate = useNavigate();

  const handleNextPage = () => {
    // Get current page number from URL
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");
    const currentPage = parseInt(pathParts[pathParts.length - 1]) || 1;

    // Navigate to next page
    navigate(`/prize/${currentPage + 1}`);
  };

  const isLastPage = () => {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");
    const currentPage = parseInt(pathParts[pathParts.length - 1]) || 1;

    return currentPage >= PAGES_CONFIG.length;
  };


  return (
    <div
      className="flex flex-column h-screen w-full align-items-center py-3 relative select-none"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!isLastPage() && (
        <div
          className="absolute surface-900 shadow-4 border-round-xl"
          style={{
            right: "3%",
            top: "3%",
          }}
          onClick={handleNextPage}
        >
          <i className="pi pi-angle-right text-yellow-300 text-5xl cursor-pointer select-none  " />
        </div>
      )}
      {/* //image container */}
      <div className="mb-3" style={{ width: "20rem", maxHeight: "7rem" }}>
        <img src={logo} className="w-full h-full" alt="logo" />
      </div>
      {/* title */}
      <div
        className="text-4xl font-medium mb-2 text-white"
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
