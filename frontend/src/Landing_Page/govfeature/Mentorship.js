import React from "react";
import "./FeatureDetails.css";

const MentorshipPage = () => {
  return (
    <div className="feature-details-container">
      <h2 className="feature-title">Mentorship by Experts</h2>
      <p className="feature-description">
        Get guidance from AYUSH veterans and domain experts to scale your
        startup.
      </p>
      <ul className="feature-list">
        <li>One-on-one mentorship sessions.</li>
        <li>Group webinars and Q&A with industry leaders.</li>
        <li>
          Guidance in business modeling, product strategy, and compliance.
        </li>
        <li>Free access to AYUSH mentor directory.</li>
      </ul>
      <p className="feature-note">
        Note: Booking mentorship slots requires approved startup registration.
      </p>
    </div>
  );
};

export default MentorshipPage;
