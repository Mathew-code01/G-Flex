// src/router.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

export default function AppRouter() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
