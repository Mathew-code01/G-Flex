// src/components/Footer.jsx

import React from "react";
import "../styles/global.css"; // ensure CSS variables are loaded
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Stephen Gbenga Photography. All rights
        reserved.
      </p>
    </footer>
  );
}
