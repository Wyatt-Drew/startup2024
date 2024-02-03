import React, { useState } from 'react';
import './LabDataForm.css'; // Ensure this CSS file is updated with the new styles

const LabDataForm = () => {
  const [labData, setLabData] = useState([{ drugName: '', mic: '' }]);

  const handleLabDataChange = (index, event) => {
    const values = [...labData];
    if (event.target.name === "drugName") {
      values[index].drugName = event.target.value;
    } else {
      values[index].mic = event.target.value;
    }
    setLabData(values);
  };

  const handleAddFields = () => {
    const values = [...labData];
    values.push({ drugName: '', mic: '' });
    setLabData(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Fasta:', event.target.fasta.files[0]);
    console.log('Site of Infection:', event.target.siteOfInfection.value);
    console.log('Lab Data:', labData);
  };

  return (
    <div className="lab-data-form-container">
      <form onSubmit={handleSubmit} className="lab-data-form">
        <div className="input-group">
          <span>Fasta:</span>
          <input type="file" id="fasta" name="fasta" accept=".fasta" required />
        </div>

        <div className="input-group">
          <span>Site of infection:</span>
          <input type="text" id="siteOfInfection" name="siteOfInfection" placeholder="Enter site of infection" required />
        </div>

        {labData.map((inputField, index) => (
          <div key={index} className="lab-data-group">
            <span>Drug Name:</span>
            <input
              type="text"
              name="drugName"
              placeholder="Drug Name"
              value={inputField.drugName}
              onChange={(event) => handleLabDataChange(index, event)}
              required
            />
            <span>MIC:</span>
            <input
              type="number"
              name="mic"
              placeholder="MIC"
              value={inputField.mic}
              onChange={(event) => handleLabDataChange(index, event)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddFields} className="add-more">+</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LabDataForm;
