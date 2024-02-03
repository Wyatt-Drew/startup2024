import React from 'react';
import './PricingComponent.css'; // Import the CSS file here

const PricingComponent = () => {
  return (
    <div className="pricing-container">
      {/* Basic Plan */}
      <div className="pricing-tier">
        <h2>Basic Plan</h2>
        <p>Essential features for individual professionals.</p>
        <button>Choose Plan</button>
      </div>

      {/* Professional Plan - Recommended */}
      <div className="pricing-tier recommended">
        <h2>Professional Plan</h2>
        <p>Advanced features for teams. Our Recommendation!</p>
        <button>Choose Plan</button>
        <div className="recommendation-badge">Our Recommendation</div>
      </div>

      {/* Enterprise Plan */}
      <div className="pricing-tier">
        <h2>Enterprise Plan</h2>
        <p>All-in-one solution for large organizations.</p>
        <button>Choose Plan</button>
      </div>
    </div>
  );
};

export default PricingComponent;
