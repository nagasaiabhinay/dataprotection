// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataRightsPageTexas from './DataRightsPageTexas';
import SearchDropdown from './SearchDropdown';
import Navbar from './Navbar';
import SecondaryNavbar from './SecondaryNavbar';
import './App.css';
import FormPage from './FormPage';


function App() {
  return (
    <Router>
      <div className="App">
        {/* Render Navbar and SecondaryNavbar for all routes */}
        <Navbar />
        <SecondaryNavbar />
        
        <Routes>
          {/* Route for the main page */}
          <Route path="/" element={
            <div className="content">
              <h2 className="main-title">Welcome to TestPage</h2>
              <p className="main-text">This is a simple page.</p>
              <SearchDropdown />
              <h3 className="sub-title">About Us</h3>
              <p className="sub-text">
                We provide various services including reporting, training, and FAQs. Our goal is to assist you in finding the information you need quickly and efficiently.
              </p>
              <h3 className="sub-title">Contact Information</h3>
              <p className="sub-text">If you have any questions or need assistance, feel free to reach out to us!</p>
            </div>
          } />
          
          {/* Route for the Data Rights Page */}
          <Route path="/usa/texas" element={<DataRightsPageTexas />} />
          <Route path="/usa/cali" element={<div>Cali Page</div>} />
          <Route path="/usa/florida" element={<div>Florida Page</div>} />
          {/* Add other routes as necessary */}
          <Route path="/form" element={<FormPage />} />
                  </Routes>
      </div>
    </Router>
  );
}

export default App;
