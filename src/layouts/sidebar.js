<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
=======
<<<<<<< HEAD
import React, { useState } from "react";
import { useLocation } from "react-router-dom"; 
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
=======
import React, { Children, useState } from "react";
>>>>>>> f50791c480f05bead5a99f78e913b9282be82907
>>>>>>> 743098f2217d47913b52e2ef05a55a1484398b2a
import "../style/sidebar.css";

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
  const location = useLocation();

  const [openMenus, setOpenMenus] = useState({
    master: false,
    reports: false,
  });

  const [activePath, setActivePath] = useState(location.pathname);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const sidebarMenu = [
    {
      label: "Dashboard",
      path: "/dashboard",
      submenuKey: null,
    },
    {
      label: "Master",
      submenuKey: "master",
      children: [
        {
          label: "User Master",
          path: "/user-master",
          icon: "👤",
        },
      
      ],
    },
    {
     label:"Privillage",
     submenuKey:"privillage",
     children:[
      {
<<<<<<< HEAD
        label: "Product Master",
        path: "/product-master",
        icon: "📦",
      },
     ]
    },
  ];

  // Sync active path and open menus on route change
  useEffect(() => {
    setActivePath(location.pathname);

    sidebarMenu.forEach((menu) => {
      if (menu.children) {
        const found = menu.children.find((child) =>
          location.pathname.startsWith(child.path)
        );
        if (found) {
          setOpenMenus((prev) => ({ ...prev, [menu.submenuKey]: true }));
        } else {
          setOpenMenus((prev) => ({ ...prev, [menu.submenuKey]: false }));
        }
      }
    });
  }, [location.pathname]);

  const handleChildClick = (path) => {
    setActivePath(path);
    navigate(path);
  };
=======
      label:'User Master',
      path:'/user-master',
      icon:'*'
    }
    ]
  }
]
>>>>>>> f50791c480f05bead5a99f78e913b9282be82907
>>>>>>> 743098f2217d47913b52e2ef05a55a1484398b2a

  return (
    <aside className="sidebar">

      <nav className="sidebar-nav">
        <ul>
<<<<<<< HEAD
          {sidebarMenu.map((item, index) => (
            <li key={index}>
              {item.children ? (
                <>
=======
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
>>>>>>> 743098f2217d47913b52e2ef05a55a1484398b2a
                  <button
                    type="button"
                    className={`nav-btn ${openMenus[item.submenuKey] ? "active-parent" : ""}`}
                    onClick={() => toggleMenu(item.submenuKey)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    {item.label}

                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      style={{
                     
                        transform: openMenus[item.submenuKey]
                          ? "rotate(0deg)"
                          : "rotate(270deg)",
                        marginLeft: "8px",
                        fill: "currentColor",
                      }}
                    >
                      <path d="M12 14.95q-.2 0-.375-.062t-.325-.213l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213T12 14.95" />
                    </svg>
                  </button>

                  {openMenus[item.submenuKey] && (
                    <ul className="submenu">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <button
                            type="button"
                            className={`nav-btn ${
                              location.pathname.startsWith(child.path)
                                ? "active-child"
                                : ""
                            }`}
                            onClick={() => handleChildClick(child.path)}
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
                  className={`nav-btn ${
                    location.pathname === item.path ? "active-child" : ""
                  }`}
                  onClick={() => {
                    setActivePath(item.path);
                    navigate(item.path);
                  }}
                >
                  {item.icon} {item.label}
                </button>
<<<<<<< HEAD
              )}
            </li>
          ))}
=======
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
>>>>>>> 743098f2217d47913b52e2ef05a55a1484398b2a
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
