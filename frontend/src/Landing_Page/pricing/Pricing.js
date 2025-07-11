import React from "react";
import "./Pricing.css"; // Import your CSS file for styling

const Pricing = () => {
  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Flexible Pricing Plans for Every Stage of Your Startup</h1>
        <p>
          Choose the plan that fits your needs and budget. Start small, scale
          big!
        </p>
        <button className="cta-btn">View Plans</button>
      </section>

      {/* Pricing Plans Section */}
      <section className="pricing-plans">
        <h2>Pricing Plans</h2>
        <p>
          Explore our plans designed to support startups at every stage of their
          journey.
        </p>
        <div className="plans-grid">
          <div className="plan-card">
            <h3>Basic Plan</h3>
            <p className="price">Free</p>
            <p className="description">
              Perfect for startups just getting started.
            </p>
            <ul>
              <li>✅ Startup Registration</li>
              <li>✅ Access to Resource Library</li>
              <li>❌ Funding Opportunities</li>
              <li>❌ Mentorship Programs</li>
              <li>❌ Networking Events</li>
            </ul>
            <button className="plan-btn">Get Started</button>
          </div>
          <div className="plan-card">
            <h3>Growth Plan</h3>
            <p className="price">₹999/month</p>
            <p className="description">
              Ideal for startups looking to grow and scale.
            </p>
            <ul>
              <li>✅ Startup Registration</li>
              <li>✅ Access to Resource Library</li>
              <li>✅ Funding Opportunities</li>
              <li>✅ Mentorship Programs</li>
              <li>❌ Networking Events</li>
            </ul>
            <button className="plan-btn">Choose Plan</button>
          </div>
          <div className="plan-card">
            <h3>Premium Plan</h3>
            <p className="price">₹1999/month</p>
            <p className="description">
              Best for startups ready to dominate the market.
            </p>
            <ul>
              <li>✅ Startup Registration</li>
              <li>✅ Access to Resource Library</li>
              <li>✅ Funding Opportunities</li>
              <li>✅ Mentorship Programs</li>
              <li>✅ Networking Events</li>
            </ul>
            <button className="plan-btn">Choose Plan</button>
          </div>
        </div>
      </section>

      {/* Features Comparison Section */}
      <section className="features-comparison">
        <h2>Compare Plans</h2>
        <p>See how our plans stack up against each other.</p>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Basic Plan</th>
              <th>Growth Plan</th>
              <th>Premium Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Startup Registration</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Resource Library</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Funding Opportunities</td>
              <td>❌</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Mentorship Programs</td>
              <td>❌</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Networking Events</td>
              <td>❌</td>
              <td>❌</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <p>
          Join thousands of startups who have successfully launched with us.
        </p>
        <div className="testimonial-carousel">{/* Add carousel here */}</div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Choose a plan today and take your startup to the next level.</p>
        <button className="cta-btn">View Plans</button>
      </section>

      

      {/* Footer */}
      <footer className="footer border-top">
        <div className="quick-links">
          <a href="/about">About Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="social-media">
          <a href="/linkedin">LinkedIn</a>
          <a href="/twitter">Twitter</a>
          <a href="/facebook">Facebook</a>
          <a href="/instagram">Instagram</a>
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

export default Pricing;
