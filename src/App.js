import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import Chatbot from './components/Chatbot';
import LabDataForm from './pages/LabDataForm';

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<LabDataForm />} />
      </Routes>
      <Footer/>
      {/* <Chatbot/> */}
      
    </HashRouter>
  );
}

export default App;
