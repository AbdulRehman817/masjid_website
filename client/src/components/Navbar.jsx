import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMosque, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        document.body.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    };

    const links = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.prayers'), path: '/prayers' },
        { name: 'Events', path: '/events' },
        { name: 'Services', path: '/services' },
        { name: 'Donate', path: '/donate' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo Area */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <FaMosque className="text-2xl text-primary" />
                        <Link to="/" className="text-xl font-semibold text-primary font-serif tracking-tight">
                            Masjid An-Noor
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-primary font-bold' : 'text-gray-500 hover:text-primary'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={toggleLanguage}
                            className="text-gray-400 hover:text-primary transition-colors"
                            aria-label="Toggle Language"
                        >
                            <FaGlobe size={18} />
                        </button>
                        <Link to="/donate" className="border border-primary text-primary px-5 py-2 rounded-md hover:bg-primary hover:text-white transition-all text-sm font-medium">
                            Donate
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
                    >
                        <div className="px-6 pt-4 pb-8 space-y-1">
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === link.path ? 'bg-gray-50 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
