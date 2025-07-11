import React from "react";
import "./FeatureDetails.css";

const PolicyAdvocacyPage = () => {
  return (
    <div className="feature-details-container">
      <h2 className="feature-title">Policy Advocacy</h2>
      <p className="feature-description">
        Play an active role in shaping the AYUSH startup ecosystem through
        policy consultation.
      </p>
      <ul className="feature-list">
        <li>Contribute to national AYUSH policy discussions.</li>
        <li>Get invited to policy roundtables and stakeholder meets.</li>
        <li>Submit suggestions for improving startup support mechanisms.</li>
        <li>Work with think tanks and government task forces.</li>
      </ul>
      <p className="feature-note">
        Note: Participation is open to approved startups and sector
        contributors.
      </p>
    </div>
  );
};

export default PolicyAdvocacyPage;
