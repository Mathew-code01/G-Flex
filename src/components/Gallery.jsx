// src/components/Gallery.jsx

import React from "react";
import "../styles/global.css";
import "../styles/gallery.css";

export default function Gallery({ images }) {
  return (
    <section className="gallery">
      {images.map((img, index) => (
        <div key={index} className="gallery-item">
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </section>
  );
}
