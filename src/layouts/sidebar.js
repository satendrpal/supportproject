import React, { Children, useState } from "react";
import "../style/sidebar.css";
import { useNavigate } from 'react-router-dom';


function Sidebar() {
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

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/goerp.png" alt="Logo" className="sidebar-logo-img" />
      </div>

      <nav className="sidebar-nav">
        <ul>
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
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
