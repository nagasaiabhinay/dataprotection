import React from 'react';
import './SecondaryNavbar.css';

function SecondaryNavbar() {
  return (
    <nav className="secondary-navbar">
      <ul className="secondary-nav-links">
        <li><a href="/">Home</a></li>
        <li className="dropdown">
          <a href="#feature2" className="dropbtn">FOR CONSUMERS <span className="arrow">▼</span></a>
          <div className="dropdown-content">
            <a href="#subfeature2-1">Subfeature 2-1</a>
            <a href="#subfeature2-2">Subfeature 2-2</a>
            <a href="#subfeature2-3">Subfeature 2-3</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#feature3" className="dropbtn">FOR BUSINESS <span className="arrow">▼</span></a>
          <div className="dropdown-content">
            <a href="#subfeature3-1">Subfeature 3-1</a>
            <a href="#subfeature3-2">Subfeature 3-2</a>
            <a href="#subfeature3-3">Subfeature 3-3</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#feature4" className="dropbtn">LEGAL RESOURCES <span className="arrow">▼</span></a>
          <div className="dropdown-content">
            <a href="#subfeature4-1">Subfeature 4-1</a>
            <a href="#subfeature4-2">Subfeature 4-2</a>
            <a href="#subfeature4-3">Subfeature 4-3</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#feature5" className="dropbtn">DATA IN CARS <span className="arrow">▼</span></a>
          <div className="dropdown-content">
            <a href="#subfeature5-1">Subfeature 5-1</a>
            <a href="#subfeature5-2">Subfeature 5-2</a>
            <a href="#subfeature5-3">Subfeature 5-3</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#feature6" className="dropbtn">NEWS <span className="arrow">▼</span></a>
          <div className="dropdown-content">
            <a href="#subfeature6-1">Subfeature 6-1</a>
            <a href="#subfeature6-2">Subfeature 6-2</a>
            <a href="#subfeature6-3">Subfeature 6-3</a>
          </div>
        </li>
      </ul>
      <div className="button-container">
        <button className="secondary-button">Assert Your Data Rights</button>
      </div>
    </nav>
  );
}

export default SecondaryNavbar;
