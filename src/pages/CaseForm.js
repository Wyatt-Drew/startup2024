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
          <div className="lab-data-group">
            <h3>Treatment Prescribed:</h3>
            <input
              type="text"
              id="treatment"
              name="treatment"
              placeholder="Treatment"
              value={caseData.treatment}
              onChange={handleChange}
              required
            />

            <h3>Dose(mg/day):</h3>
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
        <div className="input-group">
        <h3>Outcome:</h3>
          <input type="text" id="outcome" name="outcome" placeholder="Outcome" required />
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
