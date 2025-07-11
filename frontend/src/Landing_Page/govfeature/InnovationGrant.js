import React from "react";
import "./FeatureDetails.css";

const InnovationGrantPage = () => {
  return (
    <div className="feature-details-container">
      <h2 className="feature-title">Innovation Grant</h2>
      <p className="feature-description">
        Receive financial support to bring innovative AYUSH solutions to life.
      </p>
      <ul className="feature-list">
        <li>Grants up to ₹1 crore for innovative R&D projects.</li>
        <li>Support for prototype development and clinical validation.</li>
        <li>Collaborations with research institutes encouraged.</li>
        <li>Project-based funding disbursed in stages.</li>
      </ul>
      <p className="feature-note">
        Note: Innovation must align with AYUSH objectives and sustainability
        goals.
      </p>
    </div>
  );
};

export default InnovationGrantPage;
