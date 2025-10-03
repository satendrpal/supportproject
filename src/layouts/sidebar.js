import React from "react";
import "../style/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/goerp.png" alt="Logo" className="sidebar-logo-img" />
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li><a href="#">🏠 Dashboard</a></li>
          <li><a href="/user-master">📦 User Master</a></li>
          <li><a href="#">📊 Reports</a></li>
          <li><a href="#">⚙️ Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
