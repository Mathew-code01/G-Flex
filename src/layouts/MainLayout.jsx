// src/layouts/MainLayout.jsx

import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
