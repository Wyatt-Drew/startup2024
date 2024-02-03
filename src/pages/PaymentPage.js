import React, { useState } from "react";
import SimpleGooglePayButton from '../components/SimpleGooglePayButton';
import './PaymentPage.css';

const PaymentPage = () => {
  // Sample order details
  const order = {
    orderId: '12345',
    totalAmount: '$50.00',
    items: ['Product 1', 'Product 2', 'Product 3'],
  };

  return (
    <div className="PaymentPage">
      <div className="OrderDetails">
        <h2>Order Summary</h2>
        <p><strong>Order ID:</strong> {order.orderId}</p>
        <p><strong>Total Amount:</strong> {order.totalAmount}</p>
        <h3>Ordered Items:</h3>
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
<SimpleGooglePayButton/>
    </div>
  );
};

export default PaymentPage;
