import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Company Name</h2>
                    <p>Description of your company or footer message. This section can include a brief about the company or any additional information you wish to include.</p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Privacy Policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact</h2>
                    <p><strong>Email:</strong> contact@example.com</p>
                    <p><strong>Phone:</strong> +1 234 567 8901</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Company Name | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
