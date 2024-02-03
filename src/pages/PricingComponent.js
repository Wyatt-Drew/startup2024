import React from 'react';
import './PricingComponent.css';
import { Link } from 'react-router-dom';

const PricingComponent = () => {
  // Define pricing details
  const basicPlanPrice = 4000;
  const professionalPlanPrice = 6000;

  return (
    <div>
      <div className="pricing-header">
        <h1>Data Access for Businesses of All Sizes</h1>
        <p>Discover the Leading Business Data Solutions</p>
      </div>
      <div className="pricing-container">
        {/* Basic Plan */}
        <div className="pricing-tier">
          <h2>Basic Plan</h2>
          <p className="price">$4000 CAD per year</p>
          <p className="licenses">10 licenses</p>
          <p className="support">Email support</p>
          <Link to={`/PaymentPage?amount=${basicPlanPrice}`}>
            <button>Choose Plan</button>
          </Link>
        </div>

        {/* Professional Plan - Recommended */}
        <div className="pricing-tier recommended">
          <h2>Professional Plan</h2>
          <p className="price">$6000 CAD per year</p>
          <p className="licenses">Up to 25 licenses</p>
          <p className="support">Priority email and phone support</p>
          <Link to={`/PaymentPage?amount=${professionalPlanPrice}`}>
            <button>Choose Plan</button>
          </Link>
          <div className="recommendation-badge">Most Popular</div>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-tier">
          <h2>Enterprise Plan</h2>
          <p className="price">Contact us for pricing</p>
          <p className="licenses">Unlimited licenses</p>
          <p className="support">24/7 support and personal account manager</p>
          <Link to="/QuotePage">
            <button>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
