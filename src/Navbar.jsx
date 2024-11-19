import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">TestPage</h1>
        <ul className="nav-links">
          <li><a href="#home">Reporting</a></li>
          <li><a href="#about">Training</a></li>
          <li><a href="#services">FAQs</a></li>
          <li><a href="#Location">Location</a></li>
          <li><a href="#aboutus">About US</a></li>
          
          <button className="contact-button">Contact Us</button>
          </ul>
    </nav>
  );
}

export default Navbar;
