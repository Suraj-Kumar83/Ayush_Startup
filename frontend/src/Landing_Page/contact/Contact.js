import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css"; // Import your CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Replace with your actual Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setErrors({});
          setSending(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send message. Please try again.");
          setSending(false);
        }
      );
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>We’re Here to Help!</h1>
        <p>
          Have questions or need assistance? Reach out to us—we’d love to hear
          from you.
        </p>
        <button className="cta-btn">Contact Us</button>
      </section>

      {/* Contact Options Section */}
      <section className="contact-options">
        <h2>Get in Touch</h2>
        <p>Choose the most convenient way to contact us.</p>
        <div className="options-grid">
          <div className="option-card">
            <span role="img" aria-label="email">
              ✉️
            </span>
            <h3>Email</h3>
            <p>Send us an email, and we’ll get back to you within 24 hours.</p>
            <a href="mailto:support@ayushstartupportal.com">
              support@ayushstartupportal.com
            </a>
          </div>
          <div className="option-card">
            <span role="img" aria-label="phone">
              📞
            </span>
            <h3>Phone</h3>
            <p>Call us during business hours for immediate assistance.</p>
            <a href="tel:+911234567890">+91 123 456 7890</a>
          </div>
          <div className="option-card">
            <span role="img" aria-label="location">
              📍
            </span>
            <h3>Visit Us</h3>
            <p>Visit our office for a face-to-face conversation.</p>
            <p>123 Ayush Street, Wellness City, India</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form" style={{ border: "solid green" }}>
        <h2>Send Us a Message</h2>
        <p>
          Fill out the form below, and we’ll get back to you as soon as
          possible.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject of your message"
            />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              rows="5"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="map">
        <h2>Find Us on the Map</h2>
        <p>Visit our office or drop by for a chat.</p>
        <div className="map-container">
          <iframe
            title="Office Location Map"
            src="https://www.google.com/maps/embed?place=/AIIMS+Patna/@25.5629038,84.996747,12z/data=!4m6!3m5!1s0x39f2a9ea2ae04fd9:0xb2efd2a31008d750!8m2!3d25.562902!4d85.0413338!16s%2Fm%2F0k0n90r?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
            width="700px"
            height="600px"
            style={{ border: "solid black", borderRadius: "15px" }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
      <hr></hr>

      {/* Footer */}
      <footer className="footer border-top">
        <div className="quick-links">
          <Link to="/about">About Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="social-media">

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="newsletter">
          <p>
            Subscribe to our newsletter for the latest updates and resources.
          </p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <p className="copyright">
          © 2023 Ayush Startup Portal. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
