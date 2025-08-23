// src/pages/Contact.jsx

// src/pages/Contact.jsx

import React from "react";
import ContactForm from "../components/ContactForm.jsx";
import "../styles/global.css";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      <h2 className="text-gold contact-title">Contact Me</h2>

      <div className="contact-wrapper">
        <ContactForm />

        <div className="contact-info">
          <p>
            Email:{" "}
            <a href="mailto:stephengbenga64@gmail.com" className="hover-gold">
              stephengbenga64@gmail.com
            </a>
          </p>
          <p>
            Phone/WhatsApp: <span className="hover-gold">08105412982</span>
          </p>
          <p>
            Facebook:{" "}
            <a
              href="https://www.facebook.com/GflexPhotography"
              target="_blank"
              className="hover-gold"
            >
              Gflex Photography
            </a>
          </p>
          {/* <p>
            Facebook:{" "}
            <a
              href="https://www.twitter.com/FlappybirdTv"
              target="_blank"
              className="hover-gold"
            >
              Flappybird Tv
            </a>
          </p> */}
          <p>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/gflex_photography"
              target="_blank"
              className="hover-gold"
            >
              @gflex_photography
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/stephen-gbenga"
              target="_blank"
              className="hover-gold"
            >
              @Stephen Gbenga
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
