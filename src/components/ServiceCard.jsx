// src/components/ServiceCard.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import "../styles/serviceCard.css";

export default function ServiceCard({ title, description }) {
  const navigate = useNavigate();

  return (
    <div className="service-card">
      <h3 className="service-title">{title}</h3>

      {/* Photographer-friendly alternative instead of price */}
      <p className="service-tag">Custom Packages Available</p>

      <p className="service-desc">{description}</p>

      <button
        className="service-button hover-bg-gold"
        onClick={() => navigate("/contact")}
      >
        Book Now
      </button>
    </div>
  );
}
