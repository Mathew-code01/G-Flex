// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero.jsx";
import Gallery from "../components/Gallery.jsx";

const sampleImages = [
  { src: "/src/assets/images/photo1.jpg", alt: "Photo 1" },
  { src: "/src/assets/images/photo2.jpg", alt: "Photo 2" },
  { src: "/src/assets/images/photo3.jpg", alt: "Photo 3" },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <Gallery images={sampleImages} />
    </div>
  );
}
