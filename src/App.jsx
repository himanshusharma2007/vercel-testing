// Import necessary modules
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

// Main App component
function App() {
  return (
    <Router>
      <div className="container mx-auto">
        {/* Header or Navigation Bar */}
        <nav className="bg-gray-800 p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-white font-bold text-xl">
                Home
              </Link>
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
              <Link to="/cart" className="text-white hover:text-gray-300">
                Cart
              </Link>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
