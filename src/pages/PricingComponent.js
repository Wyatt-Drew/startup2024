//Pricing estimated from https://www.statista.com/accounts/ca

import React from 'react';
import './PricingComponent.css'; // Ensure this path matches the location of your CSS file
import { Link } from 'react-router-dom';
const PricingComponent = () => {
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
          <p className="price">$549 USD per month, billed annually</p>
          <p className="licenses">1 license</p>
          <p className="support">Email support</p>
          <Link to="/PaymentPage">
            <button>Choose Plan</button>
          </Link>
        </div>

        {/* Professional Plan - Recommended */}
        <div className="pricing-tier recommended">
          <h2>Professional Plan</h2>
          <p className="price">$959 USD per month, billed annually</p>
          <p className="licenses">Up to 5 licenses</p>
          <p className="support">Priority email and phone support</p>
          <Link to="/PaymentPage">
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
            <button>Choose Plan</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
