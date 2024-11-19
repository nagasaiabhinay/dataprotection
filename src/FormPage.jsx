import React from 'react';
import './FormPage.css';

const FormPage = () => {
    return (
        <div className="form-page">
            <h2>Vehicle Information Form</h2>
            <div className="form-group">
                <div className="input-container">
                    <label htmlFor="firstName">First Name (Required)</label>
                    <input type="text" id="firstName" placeholder="Enter First Name" required />
                </div>
                <div className="input-container">
                    <label htmlFor="lastName">Last Name (Required)</label>
                    <input type="text" id="lastName" placeholder="Enter Last Name" required />
                </div>
            </div>
            <div className="form-group">
                <div className="input-container">
                    <label htmlFor="email">Email Address (Required)</label>
                    <input type="email" id="email" placeholder="Enter Email Address" required />
                </div>
                <div className="input-container">
                    <label htmlFor="phone">Phone Number (Required)</label>
                    <input type="tel" id="phone" placeholder="Enter Phone Number" required />
                </div>
            </div>
            <div className="form-group">
                <div className="input-container">
                    <label htmlFor="address">Address (Required)</label>
                    <input type="text" id="address" placeholder="Enter Street Address" required />
                </div>
                
            </div>
            
                <div className='form-group'>
            <div className="input-container">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" placeholder="Enter City" />
                </div>
                <div className="input-container">
                    <label htmlFor="zip">ZIP / Postal Code</label>
                    <input type="text" id="zip" placeholder="Enter ZIP / Postal Code" />
                </div>
            
            </div>
            <div className="form-group">
                <div className="input-container">
                    <label htmlFor="vehicle">Vehicle Year, Make, and Model (Required)</label>
                    <input type="text" id="vehicle" placeholder="e.g., 2016 Toyota Corolla LE" required />
                </div>
            </div>
            <div className="form-group">
    <div className="input-container">
        <label htmlFor="vin">Vehicle Identification Number (VIN) (Required)</label>
        <input type="text" id="vin" placeholder="Enter the 17 digit VIN" required />
    </div>

    
</div>
<div className="radio-group">
            <label>Are you the owner of this Vehicle? (Required)</label>
            <label>
                <input type="radio" name="ownership" value="yes" required />
                Yes, I am/was the vehicle owner.
            </label>
            <label>
                <input type="radio" name="ownership" value="no" required />
                No, I am/was not the vehicle owner.
            </label>
        </div>

            <button type="submit">Submit</button>
        </div>
    );
};

export default FormPage;
