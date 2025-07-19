import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';

// Import future pages (you can create these later)
// import DrawPage from './pages/DrawPage.jsx';
// import CreateDrawPage from './pages/CreateDrawPage.jsx';
// import AboutPage from './pages/AboutPage.jsx';
// import NotFoundPage from './pages/NotFoundPage.jsx';

function AppRoutes() {
  return (
    <Routes>
      {/* Home page - displays all lucky draw cards */}
      <Route path="/" element={<HomePage />} />
      
      {/* Individual lucky draw page - full screen single draw */}
      {/* <Route path="/draw/:id" element={<DrawPage />} /> */}
      
      {/* Create new lucky draw */}
      {/* <Route path="/create" element={<CreateDrawPage />} /> */}
      
      {/* Edit existing lucky draw */}
      {/* <Route path="/edit/:id" element={<CreateDrawPage />} /> */}
      
      {/* About page */}
      {/* <Route path="/about" element={<AboutPage />} /> */}
      
      {/* 404 page - catch all unmatched routes */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default AppRoutes;
