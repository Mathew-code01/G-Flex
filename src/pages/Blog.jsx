// src/pages/Blog.jsx

import React from "react";
import "../styles/global.css";
import "../styles/blog.css";

const blogPosts = [
  {
    title: "Behind the Lens: Wedding Day Magic",
    excerpt:
      "Capturing authentic emotions and candid moments on a wedding day...",
    image: "/blog1.png",
  },
  {
    title: "Top Portrait Photography Tips",
    excerpt:
      "Learn how to bring out the personality in every portrait shoot...",
    image: "/blog2.png",
  },
  {
    title: "Event Photography Essentials",
    excerpt: "Key techniques for covering corporate events and gatherings...",
    image: "/blog3.png",
  },
];

export default function Blog() {
  return (
    <section className="blog-page" style={{ padding: "var(--spacing-lg)" }}>
      <h2
        className="text-gold"
        style={{ textAlign: "center", marginBottom: "var(--spacing-lg)", fontSize: "1.8rem" }}
      >
        Blog
      </h2>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.image} alt={post.title} />
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <button className="blog-button hover-bg-gold">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
