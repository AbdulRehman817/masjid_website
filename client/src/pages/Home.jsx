import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaCalendarAlt, FaHandHoldingHeart } from 'react-icons/fa';
import moment from 'moment';

const MOCK_PRAYERS = {
    fajr: "05:45",
    dhuhr: "13:15",
    asr: "16:45",
    maghrib: "19:20",
    isha: "21:00",
    jummah: "13:30"
};

const Home = () => {
    const [currentTime, setCurrentTime] = useState(moment());
    const [nextPrayer, setNextPrayer] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = moment();
            setCurrentTime(now);
            const prayers = [
                { name: 'Fajr', time: moment(MOCK_PRAYERS.fajr, 'HH:mm') },
                { name: 'Dhuhr', time: moment(MOCK_PRAYERS.dhuhr, 'HH:mm') },
                { name: 'Asr', time: moment(MOCK_PRAYERS.asr, 'HH:mm') },
                { name: 'Maghrib', time: moment(MOCK_PRAYERS.maghrib, 'HH:mm') },
                { name: 'Isha', time: moment(MOCK_PRAYERS.isha, 'HH:mm') },
            ];
            let next = prayers.find(p => now.isBefore(p.time));
            if (!next) next = { name: 'Fajr', time: moment(MOCK_PRAYERS.fajr, 'HH:mm').add(1, 'days') };
            setNextPrayer(next);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-accent min-h-screen font-sans text-text-main">

            {/* 1. Anchored Hero (Dark Background) */}
            <section className="hero-bg-soft py-24 text-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto space-y-8 relative z-10 animate-fade-in">
                    <p className="text-secondary font-bold tracking-widest text-sm uppercase">In the Name of Allah</p>
                    <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-white">Masjid An-Noor</h1>
                    <p className="text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
                        A sanctuary for the soul. Join our vibrant community in prayer, learning, and service.
                    </p>
                    <div className="pt-6 flex justify-center gap-4">
                        <Link to="/prayers" className="bg-secondary text-primary font-bold px-8 py-3 rounded-full hover:bg-white hover:text-secondary transition-all shadow-lg transform hover:-translate-y-1">
                            Prayer Times
                        </Link>
                        <Link to="/donate" className="border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-all">
                            Donate
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Prayer Strip (Floating Overlap) */}
            <section className="relative -mt-10 px-4 mb-16 z-20">
                <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg border-b-4 border-secondary p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4 border-r border-gray-100 pr-8 mr-4">
                        <div className="bg-accent p-3 rounded-full text-secondary"><FaClock size={24} /></div>
                        <div className="text-left">
                            <p className="text-xs font-bold uppercase text-gray-400">Next Prayer</p>
                            <p className="text-3xl font-serif text-primary">{nextPrayer?.name}</p>
                            <p className="text-sm text-gray-500">at {nextPrayer?.time.format('h:mm A')}</p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-around gap-2 text-center w-full">
                        {Object.entries(MOCK_PRAYERS).map(([name, time]) => (
                            <div key={name} className="flex flex-col items-center">
                                <span className={`text-xs font-bold uppercase mb-1 ${nextPrayer?.name.toLowerCase() === name ? 'text-secondary' : 'text-gray-400'}`}>{name}</span>
                                <span className={`px-2 py-1 rounded text-sm font-mono ${nextPrayer?.name.toLowerCase() === name ? 'bg-secondary text-white font-bold' : 'text-gray-600'}`}>{time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Spacious Content Sections */}
            <div className="max-w-6xl mx-auto px-6 pb-24 space-y-24">

                {/* Intro */}
                <div className="text-center max-w-3xl mx-auto">
                    <FaHandHoldingHeart className="mx-auto text-4xl text-secondary mb-6" />
                    <h2 className="text-3xl font-serif text-primary mb-6">Our Mission</h2>
                    <p className="text-xl text-text-light leading-relaxed font-light">
                        To provide a welcoming environment for Muslims to practice their faith, learn, and grow, while building bridges of understanding with the wider community.
                    </p>
                </div>

                {/* Events Cards (Clean) */}
                <div>
                    <div className="flex justify-between items-end mb-10">
                        <h3 className="text-2xl font-serif text-primary font-bold">Community Events</h3>
                        <Link to="/events" className="text-sm font-bold text-secondary uppercase tracking-wider hover:underline flex items-center gap-2">View All <FaArrowRight /></Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Grand Community Iftar", date: "15", month: "MAR", category: "Social" },
                            { title: "Sisters Tajweed Circle", date: "20", month: "MAR", category: "Education" },
                            { title: "Youth FIFA Night", date: "22", month: "MAR", category: "Youth" },
                        ].map((evt, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-accent-secondary px-3 py-2 rounded text-center min-w-[60px]">
                                        <span className="block text-xl font-bold text-primary">{evt.date}</span>
                                        <span className="block text-xs font-bold text-secondary">{evt.month}</span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{evt.category}</span>
                                </div>
                                <h4 className="text-xl font-serif text-primary mb-2 group-hover:text-secondary transition-colors">{evt.title}</h4>
                                <p className="text-sm text-gray-500 mb-4">Join us for an evening of brotherhood and connection.</p>
                                <span className="text-sm font-bold text-primary flex items-center gap-2 group-hover:translate-x-1 transition-transform">Details <FaArrowRight size={12} /></span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Footer Callout */}
            <section className="bg-secondary/10 py-20 text-center rounded-3xl mx-6 mb-12">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-3xl font-serif text-primary mb-4">Support Your Masjid</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">Your contributions help us maintain the mosque and run our community programs.</p>
                    <Link to="/donate" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg">
                        Make a Donation
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Home;
