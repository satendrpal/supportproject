import React, { useState } from 'react';
import '../src/style/login.css';
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [selectedUnitCode, setSelectedUnitCode] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
    console.log("Login clicked");
    console.log("Selected Unit Code:", selectedUnitCode);
  };

  const unitCodes = ['10001', '10002', '10003']; // Unit codes list

  const handleUnitCodeChange = (e) => {
    setSelectedUnitCode(e.target.value);
  };

  return (
    <div className="bgImg">
      <div className="container-login100">
        {/* Left Section (Image) */}
        <div className="login_img">
          <img src='/login_img_1.svg' alt="Login Illustration" />
        </div>

        {/* Right Section (Login Form) */}
        <div className="login-section">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleLogin}>
            <div className='login_form'>
              <input
                type="text"
                placeholder="Username"
                required
              />
              
              <select value={selectedUnitCode} onChange={handleUnitCodeChange} required>
                <option value="">Select Unit Code</option>
                {unitCodes.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              
              <input
                type="password"
                placeholder="Password"
                required
              />
              <div className='login_submit'>
                <button type="submit">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
