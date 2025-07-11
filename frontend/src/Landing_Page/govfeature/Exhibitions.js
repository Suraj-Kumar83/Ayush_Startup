import React from "react";
import "./FeatureDetails.css";

const ExhibitionsPage = () => {
  return (
    <div className="feature-details-container">
      <h2 className="feature-title">Priority in Exhibitions</h2>
      <p className="feature-description">
        Get the opportunity to showcase your product at major national and
        international exhibitions.
      </p>
      <ul className="feature-list">
        <li>Priority booths at AYUSH expos and startup summits.</li>
        <li>Funding for travel and setup for selected startups.</li>
        <li>Media and publicity support during exhibitions.</li>
        <li>
          Networking with investors, government officials, and global buyers.
        </li>
      </ul>
      <p className="feature-note">
        Note: Selection is based on innovation impact and presentation
        readiness.
      </p>
    </div>
  );
};

export default ExhibitionsPage;
