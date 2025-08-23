// src/components/Navbar.jsx
// src/components/Navbar.jsx

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/global.css";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // 👈 detect current route

  const toggleMenu = () => setIsOpen(!isOpen);

  // helper to check active link
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo text-gold">
          Gflex Photography
        </Link>

        <button className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className={isActive("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={() => setIsOpen(false)} className={isActive("/portfolio")}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)} className={isActive("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)} className={isActive("/services")}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setIsOpen(false)} className={isActive("/blog")}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={isActive("/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
