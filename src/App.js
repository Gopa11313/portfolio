import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Container } from 'react-bootstrap';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <HomePage/>
        <AboutPage/>
        {/* <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div> */}
        </div>
    </Router>
  );
};

export default App;
