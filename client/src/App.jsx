import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './i18n'; // Initialize i18n
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-background">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here as we implement pages */}
            <Route path="/prayers" element={<div className="p-10 text-center">Prayer Times Page (Coming Soon)</div>} />
            <Route path="/announcements" element={<div className="p-10 text-center">Announcements Page (Coming Soon)</div>} />
            <Route path="/about" element={<div className="p-10 text-center">About Page (Coming Soon)</div>} />
            <Route path="/contact" element={<div className="p-10 text-center">Contact Page (Coming Soon)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
