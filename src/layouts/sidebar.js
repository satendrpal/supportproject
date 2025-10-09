import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../style/sidebar.css";

function Sidebar() {
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

  return (
    <aside className="sidebar">

      <nav className="sidebar-nav">
        <ul>
          {sidebarMenu.map((item, index) => (
            <li key={index}>
              {item.children ? (
                <>
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
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
