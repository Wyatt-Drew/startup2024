import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import Chatbot from './components/Chatbot';
import CaseForm from './pages/CaseForm';
import LabDataForm from './pages/LabDataForm';
import Dashboard from './pages/Dashboard';
import QuotePage from './pages/QuotePage';

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        
        <Route path="/LabDataForm" element={<LabDataForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/CaseForm" element={<CaseForm />} />
        <Route path="/QuotePage" element={<QuotePage />} />
      </Routes>
      <Footer/>
      <Chatbot/>
      
    </HashRouter>
  );
}

export default App;
