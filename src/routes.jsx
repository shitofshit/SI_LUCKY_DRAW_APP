import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LuckyDrawComponent from "./pages/LuckyDrawComponent.jsx";
import { PAGES_CONFIG } from "./Constant.js";

function AppRoutes() {
  return (
    <Routes>
      {/* Home page - displays all lucky draw cards */}
      <Route path="/" element={<HomePage />}>
        <Route index element={<Navigate to="/prize/1" replace />} />

        {PAGES_CONFIG.map((page, index) => (
          <Route
            key={page.path}
            path={page.path}
            element={
              <LuckyDrawComponent 
                winnerCount={page.winnerCount} 
                prizeName={page.prizeName}
                prizeType={page.prizeType}
              />
            }
          />
        ))}
      </Route>

      {/* 404 page - catch all unmatched routes */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default AppRoutes;
