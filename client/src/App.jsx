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
          import PrayerTimes from './components/PrayerTimes';
          import Announcements from './components/Announcements';
          import MasjidProfile from './pages/MasjidProfile';
          import Contact from './pages/Contact';

          // ... (previous imports if any, keeping Navbar/Footer etc)

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prayers" element={<PrayerTimes />} />
            <Route path="/announcements" element={<Announcements />} />
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
