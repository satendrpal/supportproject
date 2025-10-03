import React from "react";
import "../style/header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left Section: Logo */}
        <div className="header-left">
          <a href="/" className="logo">
            <img src="/goerp.png" alt="Logo" className="logo-img" />
          </a>
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="header-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

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
