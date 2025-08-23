// src/pages/Portfolio.jsx

import React, { useState } from "react";
import "../styles/global.css";
import "../styles/portfolio.css";

const allPhotos = [
  {
    id: 1,
    category: "Weddings",
    src: "/src/assets/images/portfolio1.jpg",
    title: "Wedding Moment 1",
  },
  {
    id: 2,
    category: "Portraits",
    src: "/src/assets/images/portfolio2.jpg",
    title: "Portrait 1",
  },
  {
    id: 3,
    category: "Events",
    src: "/src/assets/images/portfolio3.jpg",
    title: "Corporate Event 1",
  },
  {
    id: 4,
    category: "Weddings",
    src: "/src/assets/images/portfolio4.jpg",
    title: "Wedding Moment 2",
  },
  {
    id: 5,
    category: "Portraits",
    src: "/src/assets/images/portfolio5.jpg",
    title: "Portrait 2",
  },
  {
    id: 6,
    category: "Events",
    src: "/src/assets/images/portfolio6.jpg",
    title: "Corporate Event 2",
  },
  {
    id: 7,
    category: "Weddings",
    src: "/src/assets/images/portfolio7.jpg",
    title: "Wedding Moment 3",
  },
  {
    id: 8,
    category: "Portraits",
    src: "/src/assets/images/portfolio8.jpg",
    title: "Portrait 3",
  },
  {
    id: 9,
    category: "Events",
    src: "/src/assets/images/portfolio9.jpg",
    title: "Corporate Event 4",
  },
  {
    id: 10,
    category: "Weddings",
    src: "/src/assets/images/portfolio10.jpg",
    title: "Wedding Moment 4",
  },
  {
    id: 11,
    category: "Portraits",
    src: "/src/assets/images/portfolio11.jpg",
    title: "Portrait 4",
  },
  {
    id: 12,
    category: "Events",
    src: "/src/assets/images/portfolio12.jpg",
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
