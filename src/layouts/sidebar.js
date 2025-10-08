import React, { useState } from "react";
import { useLocation } from "react-router-dom"; 
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import "../style/sidebar.css";

function Sidebar() {
  const [isUserMasterOpen, setIsUserMasterOpen] = useState(false);
  const location = useLocation(); 

  const toggleUserMaster = () => {
    setIsUserMasterOpen(!isUserMasterOpen); // Toggle the submenu open/close
  };

  const isActive = (path) => location.pathname === path; 

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/goerp.png" alt="Logo" className="sidebar-logo-img" />
      </div>

      <nav className="sidebar-nav">
        <ul>
          {/* Dashboard Item */}
          <li className={isActive("/dashboard") ? "active" : ""}>
            <a href="/dashboard">🏠 Dashboard</a>
          </li>

          {/* User Master Item with Submenu */}
          <li className={`parent ${isActive("/user-master") || isUserMasterOpen ? "active" : ""}`}>
            <a onClick={toggleUserMaster} style={{ cursor: "pointer" }}>
              📦 User Master
              {isUserMasterOpen ? (
                <FiChevronDown className="icon" /> // Down arrow when submenu is open
              ) : (
                <FiChevronRight className="icon" /> // Right arrow when submenu is closed
              )}
            </a>

            {/* Submenu Items */}
            {isUserMasterOpen && (
              <ul className="submenu">
                <li className={isActive("/user-master") ? "active" : ""}>
                  <a href="/user-master">
                    👥 User Create
                  </a>
                </li>
                <li className={isActive("/user-master/roles") ? "active" : ""}>
                  <a href="/user-master/roles">
                    🔧 User Roles
                  </a>
                </li>
                <li className={isActive("/user-master/permissions") ? "active" : ""}>
                  <a href="/user-master/permissions">
                    🔒 Permissions
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Reports Item */}
          <li className={isActive("/reports") ? "active" : ""}>
            <a href="/reports">📊 Reports</a>
          </li>

          {/* Settings Item */}
          <li className={isActive("/settings") ? "active" : ""}>
            <a href="/settings">⚙️ Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
