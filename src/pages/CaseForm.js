import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './LabDataForm.css';

const CaseForm = () => {
  const location = useLocation(); // Use the useLocation hook
  const caseDataFromDashboard = location.state || {}; // Access the state

  const [caseData, setCaseData] = useState({
    // Initialize with data passed from Dashboard or default values
    treatment: '',
    dose: '',
    outcome: '',
    ...caseDataFromDashboard // Spread in the caseDataFromDashboard to override defaults
  });
  
    const handleChange = (event) => {
      setCaseData({
        ...caseData,
        [event.target.name]: event.target.value,
      });
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting Case Data:', caseData);
    // Additional submission logic here
  };

  // Use the caseData state for displaying disease and site
  return (
    <div className="lab-data-form-container">
      <form onSubmit={handleSubmit} className="lab-data-form">
        <h2>Case Submission</h2>
        {/* Dynamically display disease and site */}
        <h3>Disease: {caseData.disease || 'N/A'}</h3>
        <h3>Site: {caseData.site || 'N/A'}</h3>

        <div className="input-group-row"> {/* Updated class name for styling */}
          <div className="lab-data-group">
            <label>Treatment Prescribed:</label>
            <input
              type="text"
              id="treatment"
              name="treatment"
              placeholder="Treatment"
              value={caseData.treatment}
              onChange={handleChange}
              required
            />

            <label>Dose(mg/day):</label>
            <input
              type="text"
              id="dose"
              name="dose"
              placeholder="Enter dose"
              value={caseData.dose}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="lab-data-group"> {/* Adjusted for Outcome to match other inputs */}
            <label>Outcome:</label>
            <input
              type="text"
              id="outcome"
              name="outcome"
              placeholder="Outcome"
              value={caseData.outcome} // Managed state for outcome
              onChange={handleChange}
              required
            />
          </div>
        <div className="form-actions">
            <div></div>
          <button type="submit">Submit</button>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default CaseForm;
