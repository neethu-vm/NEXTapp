
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from  "./Components/LoginPage";
import Dashboard from "./Components/Dashboard"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    
     <Routes >
  
     <Route exact path="/" element={ <LoginPage />}/>
      <Route exact path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
