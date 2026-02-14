import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaParking, FaBus, FaCompass } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-accent min-h-screen pb-20">
            {/* Header */}
            <div className="bg-primary text-white py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
                <p className="text-xl opacity-90">We are here to answer any questions you may have.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info & Form */}
                <div className="space-y-12">
                    {/* Info Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-accent p-3 rounded-lg text-primary text-xl"><FaMapMarkerAlt /></div>
                            <div>
                                <h3 className="font-bold text-primary mb-1">Visit Us</h3>
                                <p className="text-gray-600 text-sm">123 Masjid Road,<br />London, UK</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="bg-accent p-3 rounded-lg text-primary text-xl"><FaPhoneAlt /></div>
                            <div>
                                <h3 className="font-bold text-primary mb-1">Call Us</h3>
                                <p className="text-gray-600 text-sm">+44 123 456 7890<br />Mon-Fri, 9am-5pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info (Parking etc) */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-primary font-serif mb-6">Location Details</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-700">
                                <FaParking className="text-2xl text-secondary" />
                                <span>Free parking available on site (50 spaces).</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-700">
                                <FaBus className="text-2xl text-secondary" />
                                <span>Bus Stop (Route 42) directly outside.</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-700">
                                <FaCompass className="text-2xl text-secondary" />
                                <span>Qibla Direction: 119° South-East</span>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-secondary">
                        <h3 className="text-2xl font-bold text-primary font-serif mb-6">Send a Message</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                                <input type="text" className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="How can we help?"></textarea>
                            </div>
                            <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition-colors shadow-lg">
                                Send Message <FaEnvelope className="inline ml-2" />
                            </button>
                        </div>
                    </form>
                </div>

                {/* Map */}
                <div className="h-[600px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281066703!2d-0.24168153066420364!3d51.5287718408761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1652278456245!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Location Map"
                        className="opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
