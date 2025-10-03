// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserMasterIndex from './Componets/UserMaster/index';
import UserMasterCreate from './Componets/UserMaster/create'
import Index from './Componets/index'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/user-master" element={<UserMasterIndex />} />
        <Route path="/user-master/create" element={<UserMasterCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
