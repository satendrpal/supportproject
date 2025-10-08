import React, { useState, useEffect, useRef } from "react";
import "../style/header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isUnitCodeVisible, setUnitCodeVisible] = useState(false);
  const unitCodeRef = useRef(null); // To reference the unit code card
  const headerRef = useRef(null); // To reference the header and prevent clicking on it from closing the popup
  
  // Toggle visibility of Unit Code card
  const toggleUnitCode = () => {
    setUnitCodeVisible(!isUnitCodeVisible);
  };

  // Close popup when clicking outside
  const handleClickOutside = (event) => {
    if (unitCodeRef.current && !unitCodeRef.current.contains(event.target) && !headerRef.current.contains(event.target)) {
      setUnitCodeVisible(false);  // Close the popup
    }
  };

  // Set up event listener on mount and clean up on unmount
  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function logiClick() {
    navigate('/dashboard');
  }

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        {/* Left Section: Logo */}
        <div className="header-left">
          <div className="logo" onClick={logiClick}>
            <img src="/goerp.png" alt="Logo" className="logo-img" />
          </div>
        </div>

        {/* Middle Section: Unit Code Toggle */}
        <div className="header-right1" onClick={toggleUnitCode}>
          Unit Code :10002
        </div>

        {/* Toggleable Unit Code Card */}
        {isUnitCodeVisible && (
          <div className="unit-code-card" ref={unitCodeRef}>
            {/* Your unit codes or any additional content goes here */}
            <ul>
              <li>10001</li>
              <li>10002</li>
              <li>10003</li>
            </ul>
          </div>
        )}

        {/* Right Section: Profile */}
        <div className="header-right">
          <img src="/profile.jpg" alt="Profile" className="profile-img" />
          <span className="username">Satendra</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
