import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './i18n'; // Initialize i18n
import './index.css';
import PrayerTimes from './components/PrayerTimes';
import Announcements from './components/Announcements';
import MasjidProfile from './pages/MasjidProfile';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Donate from './pages/Donate';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-text-main bg-accent">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prayers" element={<PrayerTimes />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<MasjidProfile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
