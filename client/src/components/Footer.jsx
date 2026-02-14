import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-2xl font-bold font-serif mb-4">Masjid An-Noor</h3>
                        <p className="text-gray-300">
                            Serving the community with faith, knowledge, and compassion.
                        </p>
                    </div>

                    {/* Quick Links (could be dynamic or static here) */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <div className="space-y-2 text-gray-300">
                            <p className="flex items-center gap-2"><FaMapMarkerAlt /> 123 Main Street, City</p>
                            <p className="flex items-center gap-2"><FaPhone /> +1 234 567 890</p>
                            <p className="flex items-center gap-2"><FaEnvelope /> contact@masjidannoor.com</p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaFacebook size={24} /></a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaTwitter size={24} /></a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaInstagram size={24} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} Masjid An-Noor. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
