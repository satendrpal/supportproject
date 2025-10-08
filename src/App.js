// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserMasterIndex from './Componets/UserMaster/index';
import UserMasterCreate from './Componets/UserMaster/create'
import Index from './Componets/index'
import Dashboard from './Componets/Dashboard';
<<<<<<< HEAD
=======
import Login from './login';
>>>>>>> f50791c480f05bead5a99f78e913b9282be82907


function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Index />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
=======
      <Route path="/" element={<Login />} />
        <Route path="/index" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
>>>>>>> f50791c480f05bead5a99f78e913b9282be82907
        <Route path="/user-master" element={<UserMasterIndex />} />
        <Route path="/user-master/create" element={<UserMasterCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
