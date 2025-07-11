import React from "react";
import "./FeatureDetails.css";

const LicensingPage = () => {
  return (
    <div className="feature-details-container">
      <h2 className="feature-title">AYUSH Product Licensing</h2>
      <p className="feature-description">
        Simplify and speed up the process of getting licenses for AYUSH products
        and services.
      </p>
      <ul className="feature-list">
        <li>Dedicated AYUSH license issuing platform.</li>
        <li>Support for GMP certification.</li>
        <li>Guidance through regulatory compliance processes.</li>
        <li>Track application status in real-time.</li>
      </ul>
      <p className="feature-note">
        Note: Valid registration and product formulation details are mandatory.
      </p>
    </div>
  );
};

export default LicensingPage;
