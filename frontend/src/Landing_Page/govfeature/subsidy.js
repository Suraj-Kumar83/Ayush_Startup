import React from "react";
import "./FeatureDetails.css"; // Optional CSS for styling

const SubsidyPage = () => {
  return (
    <div className="feature-details-container">
      <h2 className="feature-title">Startup Subsidy Program</h2>
      <p className="feature-description">
        The Government of India, through the Ministry of AYUSH, provides
        financial support and startup subsidies to early-stage startups working
        in the AYUSH domain.
      </p>
      <ul className="feature-list">
        <li>Seed funding up to ₹50 lakhs for qualifying startups.</li>
        <li>Reimbursement of certification, testing, and R&D expenses.</li>
        <li>Special grants for tribal, women-led, or rural initiatives.</li>
        <li>Faster disbursal process via AYUSH Innovation Portal.</li>
      </ul>
      <p className="feature-note">
        Note: Eligibility is based on registration under the AYUSH Startup
        Scheme and a detailed project proposal.
      </p>
    </div>
  );
};

export default SubsidyPage;
