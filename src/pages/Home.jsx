// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero.jsx";
import Gallery from "../components/Gallery.jsx";

const sampleImages = [
  { src: "/photo1.webp", alt: "Photo 1" },
  { src: "/photo2.webp", alt: "Photo 2" },
  { src: "/photo3.webp", alt: "Photo 3" },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <Gallery images={sampleImages} />
    </div>
  );
}
