import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Page1 from "./pages/Page1.jsx";
import Page2 from "./pages/Page2.jsx";

function AppRoutes() {
  return (
    <Routes>
      {/* Home page - displays all lucky draw cards */}
      <Route path="/" element={<HomePage />}>
        <Route index element={<Navigate to="/prize/1" replace />} />

        <Route path="/prize/1" element={<Page1 />} />
        <Route path="/prize/2" element={<Page2 />} />
      </Route>

      {/* 404 page - catch all unmatched routes */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default AppRoutes;
