import React from 'react';
import './PricingComponent.css'; // Ensure this path matches the location of your CSS file

const PricingComponent = () => {
  return (
    <div className="pricing-container">
      {/* Basic Plan */}
      <div className="pricing-tier">
        <h2>Basic Plan</h2>
        <p className="price">$549 USD per month, billed annually</p>
        <p className="licenses">1 license</p>
        <p className="support">Email support</p>
        <button>Choose Plan</button>
      </div>

      {/* Professional Plan - Recommended */}
      <div className="pricing-tier recommended">
        <h2>Professional Plan</h2>
        <p className="price">$959 USD per month, billed annually</p>
        <p className="licenses">Up to 5 licenses</p>
        <p className="support">Priority email and phone support</p>
        <button>Choose Plan</button>
        <div className="recommendation-badge">Our Recommendation</div>
      </div>

      {/* Enterprise Plan */}
      <div className="pricing-tier">
        <h2>Enterprise Plan</h2>
        <p className="price">$249/month</p>
        <p className="licenses">Unlimited licenses</p>
        <p className="support">24/7 support and personal account manager</p>
        <button>Choose Plan</button>
      </div>
    </div>
  );
};

export default PricingComponent;
