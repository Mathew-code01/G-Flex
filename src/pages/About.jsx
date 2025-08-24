// src/pages/About.jsx

import React from "react";
import "../styles/global.css";
import "../styles/about.css";
import Portrait from "/portrait.webp"; // replace with his portrait image

export default function About() {
  return (
    <section className="about-page" style={{ padding: "var(--spacing-lg)" }}>
      <h2
        className="text-gold"
        style={{ textAlign: "center", marginBottom: "var(--spacing-lg)", fontSize: "1.8rem" }}
      >
        About Me
      </h2>

      <div className="about-content">
        <div className="about-image">
          <img src={Portrait} alt="Stephen Gbenga Portrait" />
        </div>

        <div className="about-text">
          <p>
            Hi, I’m <strong>Stephen Gbenga</strong>, a professional photographer
            specializing in cinematic photography for weddings, portraits, and
            events.
          </p>
          <p>
            My work captures stories through the lens, combining creativity,
            emotion, and technical excellence. Every moment I photograph is
            about telling your story in a timeless and cinematic way.
          </p>
          <p>
            Photography is more than a profession—it’s my passion. From intimate
            portraits to grand events, I focus on creating images that evoke
            emotion and leave a lasting impression.
          </p>
        </div>
      </div>
    </section>
  );
}
