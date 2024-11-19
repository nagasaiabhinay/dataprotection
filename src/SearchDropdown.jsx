// src/SearchDropdown.jsx

import React, { useState } from 'react';
import './SearchDropdown.css';

const SearchDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');

  const handleSearch = () => {
    if (selectedOption === 'usa' && selectedSubOption) {
      // Open DataRightsPageTexas in a new tab
      window.open(`/usa/${selectedSubOption}`, '_blank'); // Open in a new tab
    } else if (selectedOption && selectedOption !== 'usa') {
      window.open(`/${selectedOption}`, '_blank'); // Open other country pages in a new tab
    }
  };

  return (
    <div className="search-dropdown">
      <span className="label-text">I am a resident of</span>
      <select 
        value={selectedOption} 
        onChange={(e) => {
          setSelectedOption(e.target.value);
          setSelectedSubOption(''); // Reset sub-option when main option changes
        }} 
        className="sdropdown"
      >
        <option value="">Select country</option>
        <option value="canada">Canada</option>
        <option value="australia">Australia</option>
        <option value="uk">United Kingdom</option>
        <option value="India">India</option>
        <option value="usa">United States of America</option>
      </select>

      {selectedOption === 'usa' && (
        <select 
          value={selectedSubOption} 
          onChange={(e) => setSelectedSubOption(e.target.value)} 
          className="sdropdown"
        >
          <option value="">Select State</option>
          <option value="texas">Texas</option>
          <option value="cali">Cali</option>
          <option value="florida">Florida</option>
        </select>
      )}

      <button className="search-button" onClick={handleSearch}>
        Get Started
      </button>
    </div>
  );
};

export default SearchDropdown;
