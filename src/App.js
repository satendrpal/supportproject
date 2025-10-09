// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserMasterIndex from './Componets/UserMaster/index';
import UserMasterCreate from './Componets/UserMaster/create'
import Index from './Componets/index'
import Dashboard from './Componets/Dashboard';

import Login from './login';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import PartMasterIndex from './Componets/PartMaster/index';
import PartMasterCreate from './Componets/PartMaster/create'
=======
>>>>>>> f50791c480f05bead5a99f78e913b9282be82907
>>>>>>> 743098f2217d47913b52e2ef05a55a1484398b2a


>>>>>>> 959c85d642f1495bcbdc37eae41e1472759c20a1
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path='/dashboard' element={<Dashboard/>}/>

      <Route path="/" element={<Login />} />
        <Route path="/index" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-master" element={<UserMasterIndex />} />
        <Route path="/user-master/create" element={<UserMasterCreate />} />
        <Route path="/product-master" element={<PartMasterIndex />} />
        <Route path="/product-master/create" element={<PartMasterCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
