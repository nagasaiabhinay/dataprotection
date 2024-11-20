import React, { useState } from 'react';
import './FormPage.css';
import axios from 'axios';

const FormPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        vehicle: '',
        vin: '',
        ownership: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload on submit
        try {
            const response = await axios.post('http://localhost:8081/api/forms', formData); // Updated URL
            console.log("Form submitted successfully:", response.data);
            alert("Form data saved successfully!");
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert("An error occurred while submitting the form.");
        }
    };

    return (
        <form className="form-page" onSubmit={handleSubmit}>
            <h2>Vehicle Information Form</h2>
            <div className="form-group">
                <div className="input-container">
                    <label htmlFor="firstName">First Name (Required)</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter First Name"
                        required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="lastName">Last Name (Required)</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter Last Name"
                        required
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="input-container">
                    <label htmlFor="email">Email Address (Required)</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Email Address"
                        required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="phone">Phone Number (Required)</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Phone Number"
                        required
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="input-container">
                    <label htmlFor="address">Address (Required)</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter Street Address"
                        required
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="input-container">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter City"
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="zip">ZIP / Postal Code</label>
                    <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        placeholder="Enter ZIP / Postal Code"
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="input-container">
                    <label htmlFor="vehicle">Vehicle Year, Make, and Model (Required)</label>
                    <input
                        type="text"
                        id="vehicle"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        placeholder="e.g., 2016 Toyota Corolla LE"
                        required
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="input-container">
                    <label htmlFor="vin">Vehicle Identification Number (VIN) (Required)</label>
                    <input
                        type="text"
                        id="vin"
                        name="vin"
                        value={formData.vin}
                        onChange={handleChange}
                        placeholder="Enter the 17 digit VIN"
                        required
                    />
                </div>
            </div>
            <div className="radio-group">
                <label>Are you the owner of this Vehicle? (Required)</label>
                <label>
                    <input
                        type="radio"
                        name="ownership"
                        value="yes"
                        checked={formData.ownership === "yes"}
                        onChange={handleChange}
                        required
                    />
                    Yes, I am/was the vehicle owner.
                </label>
                <label>
                    <input
                        type="radio"
                        name="ownership"
                        value="no"
                        checked={formData.ownership === "no"}
                        onChange={handleChange}
                        required
                    />
                    No, I am/was not the vehicle owner.
                </label>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default FormPage;
