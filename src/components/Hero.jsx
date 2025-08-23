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
        <h1 className="hero-title text-gold">
          Capturing Stories Through the Lens
        </h1>
        <p className="hero-subtitle">
          Cinematic photography for weddings, portraits, and events
        </p>
        <button
          className="hero-button hover-bg-gold"
          onClick={() => navigate("/portfolio")}
        >
          View My Work
        </button>
      </div>
    </section>
  );
}
