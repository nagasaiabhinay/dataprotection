// src/DataRightsPageTexas.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './DataRightsPage.css';

const DataRightsPageTexas = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Define a function to handle button click
  const handleNextClick = () => {
    // Example: Navigate to another page (e.g., a confirmation page or next step)
    navigate('/form'); // Change this to the actual path you want to navigate to
  };

  return (
    <div className="data-rights-page">
      <h1 className="title">AYR Texas</h1>
      <div className="progress-container">
        <span>Step 1 of 7</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: '14%' }}></div>
        </div>
      </div>
      <h2 className="sub-title">Assert Your Data Rights (Texas)</h2>
      <p className="description">
        Privacy4Cars can help you Drive Privacy by making it simple to assert your rights under the Texas Data Privacy and Securities Act ("TDPSA"). We currently track ~500 entities who collect, share, sell, and broker vehicle data...
      </p>
      <p className="sub-description">
        Please fill this form to designate and appoint Privacy4Cars, Inc. to represent you as your authorized agent to act on your behalf for the purposes of:
      </p>
      <ul className="info-list">
        <li>Submitting TDPSA requests to first-party businesses, data brokers, and third parties;</li>
        <li>Communicating on your behalf with these businesses regarding your TDPSA requests;</li>
        <li>Exercising your data rights under any U.S. or state privacy laws, including TDPSA;</li>
        <li>Filing complaints on your behalf with governmental agencies, such as FTC, Attorney’s General Office, etc.</li>
      </ul>
      <p className="privacy-note">
        The personal information you provide will be purged once your TDPSA requests have been fulfilled...
      </p>
      <div className="agent-info">
        <h3>AUTHORIZED AGENT INFORMATION</h3>
        <p><strong>Authorized Agent Name:</strong> Privacy4Cars, Inc.</p>
        <p><strong>Mailing Address:</strong> 630 Kennesaw Due West, Kennesaw, GA 30152</p>
        <p><strong>Email Address:</strong> <a href="mailto:privacyrights@privacy4cars.com">privacyrights@privacy4cars.com</a></p>
      </div>
      {/* Add onClick handler to the Next button */}
      <button className="next-button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default DataRightsPageTexas;
