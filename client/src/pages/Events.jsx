import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaFilter, FaThLarge, FaList } from 'react-icons/fa';

const Events = () => {
    const [view, setView] = useState('grid');
    const [filter, setFilter] = useState('all');

    const events = [
        { id: 1, title: 'Ramadan Prep Course', date: '12 Feb', category: 'general', image: 'https://source.unsplash.com/random/800x600?islamic,mosque&sig=1', desc: 'Prepare your heart and soul for the holy month.' },
        { id: 2, title: 'Sisters Halaqa', date: '15 Feb', category: 'sisters', image: 'https://source.unsplash.com/random/800x600?islamic,women&sig=2', desc: 'Weekly gathering for sisters to learn and connect.' },
        { id: 3, title: 'Youth Soccer Night', date: '18 Feb', category: 'kids', image: 'https://source.unsplash.com/random/800x600?soccer&sig=3', desc: 'Fun and sports for the youth in the community hall.' },
        { id: 4, title: 'Understanding Quran', date: '20 Feb', category: 'general', image: 'https://source.unsplash.com/random/800x600?quran&sig=4', desc: 'Deep dive into the meanings of Surah Al-Kahf.' },
    ];

    const filteredEvents = filter === 'all' ? events : events.filter(e => e.category === filter);

    return (
        <div className="bg-accent min-h-screen pb-20">
            {/* Header */}
            <div className="bg-primary text-white py-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-0"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Community Gatherings</h1>
                    <p className="text-xl opacity-90">Join us in learning, growing, and worshipping together.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row gap-8">
                {/* Filters Sidebar */}
                <div className="w-full md:w-1/4">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                        <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                            <FaFilter /> Filters
                        </h3>
                        <div className="space-y-2">
                            {['all', 'general', 'sisters', 'kids'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`w-full text-left px-4 py-2 rounded-lg capitalize transition-colors ${filter === cat ? 'bg-secondary text-white font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Events Grid/List */}
                <div className="w-full md:w-3/4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-serif font-bold text-primary">Upcoming Events</h2>
                        <div className="flex gap-2 bg-white p-1 rounded-lg border border-gray-200">
                            <button onClick={() => setView('grid')} className={`p-2 rounded-md ${view === 'grid' ? 'bg-primary text-white' : 'text-gray-400 hover:text-primary'}`}><FaThLarge /></button>
                            <button onClick={() => setView('list')} className={`p-2 rounded-md ${view === 'list' ? 'bg-primary text-white' : 'text-gray-400 hover:text-primary'}`}><FaList /></button>
                        </div>
                    </div>

                    <div className={view === 'grid' ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"}>
                        {filteredEvents.map(event => (
                            <div key={event.id} className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group ${view === 'list' ? 'flex' : ''}`}>
                                <div className={`relative ${view === 'list' ? 'w-48 h-full min-h-[160px]' : 'h-48'}`}>
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-center shadow-sm">
                                        <span className="block text-sm font-bold text-primary">{event.date.split(' ')[0]}</span>
                                        <span className="block text-xs uppercase font-bold text-gray-500">{event.date.split(' ')[1]}</span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col justify-between flex-1">
                                    <div>
                                        <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">{event.category}</span>
                                        <h3 className="text-xl font-bold text-primary font-serif mb-2">{event.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{event.desc}</p>
                                    </div>
                                    <button className="text-primary font-bold text-sm uppercase tracking-wide hover:text-secondary hover:underline self-start">
                                        Register Details &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
