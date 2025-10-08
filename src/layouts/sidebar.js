<<<<<<< HEAD
import React, { useState } from "react";
import { useLocation } from "react-router-dom"; 
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
=======
import React, { Children, useState } from "react";
>>>>>>> f50791c480f05bead5a99f78e913b9282be82907
import "../style/sidebar.css";
import { useNavigate } from 'react-router-dom';


function Sidebar() {
<<<<<<< HEAD
  const [isUserMasterOpen, setIsUserMasterOpen] = useState(false);
  const location = useLocation(); 

  const toggleUserMaster = () => {
    setIsUserMasterOpen(!isUserMasterOpen); // Toggle the submenu open/close
  };

  const isActive = (path) => location.pathname === path; 
=======
  const navigate = useNavigate();

  const [openMenus, setOpenMenus] = useState({
    master: false,
    reports: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };
const sidebarMenu =[
  {
    label:'Dashboard',
    path:'/dashboard',
  },
  {
    lable1:'Master',
    submenuKey:'Master',
    children :[
      {
      label:'User Master',
      path:'/user-master',
      icon:'*'
    }
    ]
  }
]
>>>>>>> f50791c480f05bead5a99f78e913b9282be82907

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/goerp.png" alt="Logo" className="sidebar-logo-img" />
      </div>

      <nav className="sidebar-nav">
        <ul>
<<<<<<< HEAD
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
=======
        {sidebarMenu.map((item, index) => (
    <li key={index}>
      {item.children ? (
        <>
          <button
            type="button"
            className="nav-btn"
            onClick={() => toggleMenu(item.submenuKey)}
          >
           {item.lable1}
          </button>

          {openMenus[item.submenuKey] && (
            <ul className="submenu">
              {item.children.map((child, childIndex) => (
                <li key={childIndex}>
                  <button
                    type="button"
                    className="nav-btn"
                    onClick={() => navigate(child.path)}
                  >
                    {child.icon} {child.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <button
          type="button"
          className="nav-btn"
          onClick={() => navigate(item.path)}
        >
          {item.icon} {item.label}
        </button>
      )}
    </li>
  ))}


          {/* <li>
          <button type="button" className="nav-btn" onClick={() => navigate('/dashboard')}>
            Dashboard
          </button>
          </li>
          
        <li>
          <button type="button" className="nav-btn" onClick={() => toggleMenu('master')}>
           Master
          </button>

          {openMenus.master && (
            <ul className="submenu">
              <li>
                <button type="button" className="nav-btn" onClick={() => navigate('/user-master')}>
                  👤 User Master
                </button>
              </li>
              <li>
                <button type="button" className="nav-btn" onClick={() => navigate('/product-master')}>
                  📦 Product Master
                </button>
              </li>
            </ul>
          )}
        </li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Settings</a></li> */}
>>>>>>> f50791c480f05bead5a99f78e913b9282be82907
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
