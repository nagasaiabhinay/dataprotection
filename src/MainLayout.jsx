import React from 'react';
import Navbar from './Navbar'; // Import your Navbar
import SecondaryNavbar from './SecondaryNavbar'; // Import your Secondary Navbar
import './App.css'; // Optional: Import CSS for layout styling

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <SecondaryNavbar />
            <div className="main-content">
                {children} {/* Render the specific page content here */}
            </div>
        </div>
    );
};

export default MainLayout;
