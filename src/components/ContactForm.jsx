// src/components/ContactForm.jsx
// src/components/ContactForm.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/global.css";
import "../styles/contactForm.css"; // ✅ make sure form styles are imported

export default function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // ✅ "success" | "error" | null

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    const formData = new FormData(form.current);
    const email = formData.get("email")?.trim();
    const name = formData.get("name")?.trim();
    const message = formData.get("message")?.trim();


    // ✅ Basic validation
    if (!name || !email || !message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }
    if (!validateEmail(email)) {
      setStatus({ type: "error", message: "Please enter a valid email." });
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus({
          type: "success",
          message: "✅ Message sent successfully!",
        });
        form.current.reset();
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "❌ Failed to send. Please try again.",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="contact-form-wrapper">
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="John Doe"
          required
          maxLength="256"
          disabled={loading}
        />

        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          maxLength="256"
          disabled={loading}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          maxLength="5000"
          disabled={loading}
        />

        <button
          type="submit"
          className="contact-button hover-bg-gold"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* ✅ Inline feedback */}
        {status && (
          <p className={`status-message ${status.type}`}>{status.message}</p>
        )}
      </form>
    </div>
  );
}
