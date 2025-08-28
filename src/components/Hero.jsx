// src/components/Hero.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import "../styles/hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1 className="hero-title">Keeping Memories Alive</h1>
        <p className="hero-subtitle">Photography for the chic & modern 📸✨</p>

        {/* categories now styled better + spaced */}
        <p className="hero-categories">Events | Fashion | Wedding</p>

        <button className="hero-button" onClick={() => navigate("/portfolio")}>
          View My Work
        </button>
      </div>
    </section>
  );
}
