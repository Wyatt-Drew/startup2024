import React, { useState } from 'react';
import './LabDataForm.css'; // Ensure CSS is properly set up

// Example case data
const initialCases = [
    { id: 1, disease: 'Streptococcus viridis-123', site: 'Knee', treatment: '', dose: '', outcome: '' },
    { id: 2, disease: 'Escherichia coli O157:H7', site: 'Gastrointestinal', treatment: '', dose: '', outcome: '' },
    { id: 3, disease: 'Mycobacterium tuberculosis', site: 'Lung', treatment: '', dose: '', outcome: '' },
    { id: 4, disease: 'Staphylococcus aureus', site: 'Skin', treatment: '', dose: '', outcome: '' },
    { id: 5, disease: 'Clostridium difficile', site: 'Colon', treatment: '', dose: '', outcome: '' }
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
