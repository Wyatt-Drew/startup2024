import React, { useState } from 'react';
import './LabDataForm.css'; // Ensure CSS is properly set up

// Example case data
const initialCases = [
  { id: 1, disease: 'Streptococcus viridis-123', site: 'Knee', treatment: '', dose: '', outcome: '' },
  // Add more cases here
];

const Dashboard = () => {
  const [cases, setCases] = useState(initialCases);
  
  const handleComplete = (caseId) => {
    // Remove the case from the list to simulate marking it as complete
    setCases(cases.filter(caseItem => caseItem.id !== caseId));
  };

  return (
    <div className="dashboard-container">
      {cases.map(caseItem => (
        <div key={caseItem.id} className="dashboard-item">
          <h3>Disease: {caseItem.disease}</h3>
          <h4>Site: {caseItem.site}</h4>
          {/* Implement inputs or display for treatment, dose, outcome as needed */}
          <button onClick={() => handleComplete(caseItem.id)}>Complete</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
