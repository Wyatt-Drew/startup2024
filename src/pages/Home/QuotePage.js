import React, { useState } from 'react';
import picture from '../../assets/farming.png';
import './QuotePage.css';

function QuotePage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        eventDate: '',
        eventType: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, for example, sending data to a server
        console.log(formData);
    };

    return (
        <div className = "container">
            <img className = "image" src={picture} alt="Event" />
            <form className="quote-form" onSubmit={handleSubmit}>
                <h2>Get a free quote</h2>
                <p>Tell us more about your event, contact us. We are happy to assist you.</p>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Event Date:</label>
                    <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
                </div>
                <div>
                <label>Event Type:</label>
                <select name="eventType" value={formData.eventType} onChange={handleChange}>
                    <option value="">Select an event type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Corporate Event">Corporate Event</option>
                </select>
                </div>
                <div>
                    <label>Additional Information:</label>
                    <input type="text" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange}/>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default QuotePage;
