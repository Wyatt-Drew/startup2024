import React, { useState } from 'react';
import './LabDataForm.css'; // Ensure this CSS file is updated with the styles provided

const CaseForm = () => {
  const [caseData, setCaseData] = useState({
    treatment: '',
    dose: '',
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
          <div className="input-group">
            <label htmlFor="treatment">Treatment Prescribed:</label>
            <input
              type="text"
              id="treatment"
              name="treatment"
              placeholder="Enter treatment prescribed"
              value={caseData.treatment}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="dose">Dose:</label>
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

        <div className="form-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CaseForm;
