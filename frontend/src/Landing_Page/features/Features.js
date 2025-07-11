import React from "react";
import "./Features.css"; // Import your CSS file for styling

const Features = () => {
  return (
    <div
      className="features-page"
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f0f4f8",
        color: "#1f2937",
      }}
    >
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          background: "linear-gradient(to right, #3b82f6, #06b6d4)",
          color: "#ffffff",
          padding: "60px 20px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Everything You Need to Launch and Grow Your Startup
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            maxWidth: "700px",
            margin: "0 auto 2rem",
          }}
        >
          From registration to scaling, we provide the tools and resources to
          help your startup succeed.
        </p>
        <button
          className="cta-btn"
          style={{
            backgroundColor: "#f59e0b",
            padding: "12px 24px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Explore Features
        </button>
      </section>

      {/* Key Features Section */}
      <section className="key-features">
        <h2 style={{ color: "#111827" }}>Key Features</h2>
        <p style={{ color: "#6b7280" }}>
          Discover the tools and resources designed to empower your startup
          journey.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <span role="img" aria-label="registration">
              📝
            </span>
            <h3>Easy Startup Registration</h3>
            <p>
              Quick and hassle-free registration process tailored for startups.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="funding">
              💰
            </span>
            <h3>Access to Funding</h3>
            <p>
              Connect with investors and access exclusive funding opportunities.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="mentorship">
              👥
            </span>
            <h3>Mentorship Programs</h3>
            <p>Learn from experienced mentors and industry leaders.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="networking">
              🌐
            </span>
            <h3>Networking Opportunities</h3>
            <p>
              Join exclusive events and connect with like-minded entrepreneurs.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="resources">
              📚
            </span>
            <h3>Resource Library</h3>
            <p>Access templates, guides, and tools to grow your startup.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="analytics">
              📊
            </span>
            <h3>Analytics Dashboard</h3>
            <p>Track your startup’s progress with our intuitive dashboard.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="compliance">
              📜
            </span>
            <h3>Regulatory Compliance Support</h3>
            <p>
              Step-by-step assistance in complying with Ministry of AYUSH
              regulations.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="clinical">
              🧪
            </span>
            <h3>Clinical Trial Assistance</h3>
            <p>
              Get help conducting clinical validations for Ayurvedic, Unani,
              Siddha, or Homeopathic formulations.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="ayurveda">
              🌿
            </span>
            <h3>AYUSH Ingredient Directory</h3>
            <p>
              Access a verified database of approved herbs, minerals, and
              formulations.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="license">
              📇
            </span>
            <h3>License Application Portal</h3>
            <p>
              Integrated portal to apply for manufacturing, export, and GMP
              certifications.
            </p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="collaboration">
              🤝
            </span>
            <h3>Collaborate with AYUSH Institutes</h3>
            <p>
              Connect with research institutes, hospitals, and colleges under
              the AYUSH umbrella.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="detailed-features">
        <h2>Detailed Features</h2>
        <p>
          Explore how our platform can help you at every stage of your startup
          journey.
        </p>
        <div className="feature-accordion">
          {/* Add accordion or tabs here */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="testimonials"
        style={{ backgroundColor: "#e0f2fe", padding: "40px 20px" }}
      >
        <h2>What Our Users Say</h2>
        <p>
          Join thousands of startups who have successfully launched with us.
        </p>
        <div className="testimonial-carousel">{/* Add carousel here */}</div>
      </section>

      {/* Call-to-Action Section */}
      <section
        className="cta"
        style={{
          backgroundColor: "#d1fae5",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h2 style={{ color: "#065f46" }}>
          Ready to Take Your Startup to the Next Level?
        </h2>
        <p>Join our platform today and unlock a world of opportunities.</p>
        <button
          className="cta-btn"
          style={{
            backgroundColor: "#059669",
            padding: "12px 24px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            color: "#fff",
          }}
        >
          Get Started Now
        </button>
      </section>
      <hr />

      {/* Footer */}
      <footer
        className="footer border-top"
        style={{
          backgroundColor: "#111827",
          color: "#9ca3af",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <div className="quick-links">
          <a href="/about" style={{ color: "#facc15", margin: "0 10px" }}>
            About Us
          </a>
          <a href="/privacy" style={{ color: "#facc15", margin: "0 10px" }}>
            Privacy Policy
          </a>
          <a href="/terms" style={{ color: "#facc15", margin: "0 10px" }}>
            Terms of Service
          </a>
          <a href="/contact" style={{ color: "#facc15", margin: "0 10px" }}>
            Contact
          </a>
        </div>
        <div className="social-media">
          <a href="/linkedin" style={{ color: "#60a5fa", margin: "0 10px" }}>
            LinkedIn
          </a>
          <a href="/twitter" style={{ color: "#60a5fa", margin: "0 10px" }}>
            Twitter
          </a>
          <a href="/facebook" style={{ color: "#60a5fa", margin: "0 10px" }}>
            Facebook
          </a>
          <a href="/instagram" style={{ color: "#60a5fa", margin: "0 10px" }}>
            Instagram
          </a>
        </div>
        <div className="newsletter" style={{ marginTop: "20px" }}>
          <p>
            Subscribe to our newsletter for the latest updates and resources.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #d1d5db",
              marginRight: "10px",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#f59e0b",
              color: "#1f2937",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </div>
        <p
          className="copyright"
          style={{ marginTop: "20px", fontSize: "0.875rem" }}
        >
          © 2023 [Your Startup Portal Name]. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Features;
