import React, { useState, useEffect, useRef } from "react";
import "../style/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isUnitCodeVisible, setUnitCodeVisible] = useState(false);
  const [isProfileOpenVisible, setProfileOpenVisible] = useState(false);
  const unitCodeRef = useRef(null); 
  const headerRef = useRef(null); 
  const [unicode ,setUnitcode] = useState(10001);
  

  const toggleUnitCode = () => {
    setUnitCodeVisible(!isUnitCodeVisible);
  };

  function profiletoggle(){
    setProfileOpenVisible(!isProfileOpenVisible)
  }

  const handleClickOutside = (event) => {
  
    if (unitCodeRef.current && !unitCodeRef.current.contains(event.target) && !headerRef.current.contains(event.target)) {
      setUnitCodeVisible(false); 
      setProfileOpenVisible(false)
    }
  };

  function handleclick(event){
    if (event.target.tagName === 'LI') {
      console.log(event.target.textContent);
      setUnitcode(event.target.textContent)
      setUnitCodeVisible(false); 
      navigate('/dashboard')
    }
     
  }


  useEffect(() => {
   
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function logiClick() {
    navigate('/dashboard');
  }
function signout(){
  navigate('/');
}

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        <div className="header-left">
          <div className="logo" onClick={logiClick}>
            <img src="/goerp.png" alt="Logo" className="logo-img" />
          </div>
        </div>

        <div className="header-right1" onClick={toggleUnitCode}>
          Unit Code :{unicode}
          <FontAwesomeIcon 
        icon={faSortDown} 
        className="sort-down-icon" 
        style={{ marginLeft: '5px', cursor: 'pointer' }} 
      />
        </div>
        {isUnitCodeVisible && (
          <div className="unit-code-card" ref={unitCodeRef}>
            <ul onClick={handleclick}>
              <li>10001</li>
              <li>10002</li>
              <li>10003</li>
            </ul>
      
          </div>
        )}

<div className="header-right" onClick={profiletoggle}>
      <img src="/profile.jpg" alt="Profile" className="profile-img" />
      <span className="username">Satendra</span>
      <FontAwesomeIcon 
        icon={faSortDown} 
        className="sort-down-icon" 
        style={{ marginLeft: '5px', cursor: 'pointer' }} 
      />
    </div>
    {isProfileOpenVisible && (
          <div className="userprofile">
            <ul>
              <li>Profile</li>
              <hr></hr>
              <li onClick={signout} style={{cursor:'pointer'}}><FontAwesomeIcon icon="fa-duotone fa-regular fa-right-from-bracket" /> SignOut</li>
            </ul>
      
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
