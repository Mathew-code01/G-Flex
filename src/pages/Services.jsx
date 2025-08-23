// src/pages/Services.jsx

import React from "react";
import ServiceCard from "../components/ServiceCard.jsx";
import "../styles/service.css";

const services = [
  {
    title: "Wedding Photography",
    description: "Capture every moment of your special day in cinematic style.",
  },
  {
    title: "Portrait Sessions",
    description: "Professional portraits that tell your story and personality.",
  },
  {
    title: "Event Photography",
    description:
      "Document corporate events, parties, and gatherings with style.",
  },
];

export default function Services() {
  return (
    <section className="services-page" style={{ padding: "var(--spacing-lg)" }}>
      <h2
        className="text-gold"
        style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}
      >
        Services
      </h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
