// src/pages/Portfolio.jsx

import React, { useState } from "react";
import "../styles/global.css";
import "../styles/portfolio.css";

const allPhotos = [
  {
    id: 1,
    category: "Weddings",
    src: "/portfolio1.png",
    title: "Wedding Moment 1",
  },
  {
    id: 2,
    category: "Portraits",
    src: "/portfolio2.png",
    title: "Portrait 1",
  },
  {
    id: 3,
    category: "Events",
    src: "/portfolio3.png",
    title: "Corporate Event 1",
  },
  {
    id: 4,
    category: "Weddings",
    src: "/portfolio4.png",
    title: "Wedding Moment 2",
  },
  {
    id: 5,
    category: "Portraits",
    src: "/portfolio5.png",
    title: "Portrait 2",
  },
  {
    id: 6,
    category: "Events",
    src: "/portfolio6.webp",
    title: "Corporate Event 2",
  },
  {
    id: 7,
    category: "Weddings",
    src: "/portfolio7.webp",
    title: "Wedding Moment 3",
  },
  {
    id: 8,
    category: "Portraits",
    src: "/portfolio8.webp",
    title: "Portrait 3",
  },
  {
    id: 9,
    category: "Events",
    src: "/portfolio9.webp",
    title: "Corporate Event 4",
  },
  {
    id: 10,
    category: "Weddings",
    src: "/portfolio10.webp",
    title: "Wedding Moment 4",
  },
  {
    id: 11,
    category: "Portraits",
    src: "portfolio11.webp",
    title: "Portrait 4",
  },
  {
    id: 12,
    category: "Events",
    src: "/portfolio12.webp",
    title: "Corporate Event 4",
  },
];

const categories = ["All", "Weddings", "Portraits", "Events"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredPhotos =
    selectedCategory === "All"
      ? allPhotos
      : allPhotos.filter((photo) => photo.category === selectedCategory);

  return (
    <section
      className="portfolio-page"
      
    >
      <h2
        className="text-gold"
        style={{ textAlign: "center", marginBottom: "var(--spacing-lg)", marginTop: "var(--spacing-lg)" }}
      >
        Portfolio
      </h2>

      <div className="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-button hover-bg-gold ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            className="gallery-item"
            data-title={photo.title}
            onClick={() => setLightboxImage(photo.src)}
          >
            <img src={photo.src} alt={photo.title} />
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Preview" />
        </div>
      )}
    </section>
  );
}
