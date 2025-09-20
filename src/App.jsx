import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.png';

// Import pages
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  // Helper function to handle navigation clicks
  const handleNavClick = (e, path) => {
    // If we're already on the homepage, scroll to the section instead
    if (window.location.pathname === '/' && path !== '/') {
      e.preventDefault();
      const sectionId = path.substring(1); // Remove the leading slash
      document.getElementById(`${sectionId}-section`).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="app">
        {/* Navigation Bar with improved links */}
        <nav className="navbar">
          <div className="logo-container">
            <Link to="/"><img src={logo} alt="Company Logo" className="logo" /></Link>
          </div>
          <div className="nav-links">
            <Link to="/" onClick={(e) => handleNavClick(e, '/')}>HOME</Link>
            <Link to="/services" onClick={(e) => handleNavClick(e, '/services')}>SERVICES</Link>
            <Link to="/products" onClick={(e) => handleNavClick(e, '/products')}>PRODUCTS</Link>
            <Link to="/contact" onClick={(e) => handleNavClick(e, '/contact')}>ENQUIRY</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Southern Bay Enterprises. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;