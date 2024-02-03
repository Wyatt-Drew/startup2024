import React, { useState } from 'react';
import './LabDataForm.css'; // Ensure this CSS file is updated with the styles provided

const CaseForm = () => {
    const [caseData, setCaseData] = useState({
      treatment: '',
      dose: '',
      outcome: '', // Added outcome to the state to manage its value
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

  return (
    <div className="lab-data-form-container">
      <form onSubmit={handleSubmit} className="lab-data-form">
        <h2>Case Submission</h2>
        <h3>Disease: Streptococcus viridis-123</h3>
        <h3>Site: Knee</h3>

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
