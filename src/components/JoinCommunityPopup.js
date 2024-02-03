import React, { useState, useEffect } from 'react';
import './JoinCommunityPopup.css'; // Import the CSS for styling
import productImage from '../assets/grass.jpg';

const JoinCommunityPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 50) {
        if (!showPopup) {
          setShowPopup(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showPopup]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for joining our community!');
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="popupContainer">
      <div className="popup">
          <button className="exitButton" onClick={handleClose}>X</button>
          <h2>Subscribe and enjoy</h2>
          <h1>20% off</h1>
          <h2>your first purchase when you join our list</h2>
          <form className = "popupForm" onSubmit={handleSubmit}>
            {/* <input type="text" placeholder="First Name" required /> */}
            <input type="email" placeholder="Email" required />
            {/* <input type="tel" placeholder="Phone Number" required /> */}
            <button type="submit">Get Offers</button>
          </form>
        </div>
    </div>
  );
};

export default JoinCommunityPopup;
