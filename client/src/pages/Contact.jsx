import React from 'react';
import { MapPin, Phone, Mail, Compass } from 'lucide-react';

const Contact = () => {
    // Dummy handler for form
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
    };

    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-10 text-primary">Contact & Location</h1>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Contact Info & Form */}
                <div className="space-y-8">
                    {/* Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white p-5 rounded-xl shadow-md flex items-center space-x-3">
                            <MapPin className="text-red-500" />
                            <div>
                                <h3 className="font-semibold">Address</h3>
                                <p className="text-sm text-gray-600">123 Street Name, City, Country</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-md flex items-center space-x-3">
                            <Phone className="text-green-500" />
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-sm text-gray-600">+1 234 567 890</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-md flex items-center space-x-3">
                            <Mail className="text-blue-500" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-sm text-gray-600">contact@masjid.com</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-xl shadow-md flex items-center space-x-3">
                            <Compass className="text-purple-500" />
                            <div>
                                <h3 className="font-semibold">Qibla Direction</h3>
                                <p className="text-sm text-gray-600">118.5° South East</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2 border" placeholder="Your Name" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2 border" placeholder="you@example.com" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 p-2 border" rows="4" placeholder="Your message..." required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors font-semibold">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map & Parking */}
                <div className="space-y-8">
                    {/* Google Map Embed */}
                    <div className="h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100">
                        {/* Replace src with actual Google Maps Embed URL */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281066703!2d-0.24168153066420364!3d51.5287718408761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1652278456245!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Masjid Location"
                        ></iframe>
                    </div>

                    {/* Parking Info */}
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">Parking Information</h3>
                        <p className="text-blue-700">
                            Free parking is available on the main street after 6 PM.
                            We also have a dedicated parking lot at the rear of the building (approx. 20 spaces) for disabled and elderly visitors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
