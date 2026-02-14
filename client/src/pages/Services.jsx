import React from 'react';
import { FaUserTie, FaBookOpen, FaHandHoldingHeart, FaQuran, FaUsers, FaChild, FaUserMd, FaChalkboardTeacher } from 'react-icons/fa';

const Services = () => {
    const services = [
        { icon: <FaUserTie />, title: 'Nikah Services', desc: 'Official solemnization of marriages with counseling and certification.' },
        { icon: <FaQuran />, title: 'Funeral Services', desc: 'Janazah prayers and burial assistance in accordance with Sunnah.' },
        { icon: <FaBookOpen />, title: 'Quran Classes', desc: 'Evening maktab for children and adult Tajweed circles.' },
        { icon: <FaUsers />, title: 'Family Counseling', desc: 'Confidential spiritual guidance and conflict resolution.' },
        { icon: <FaHandHoldingHeart />, title: 'Charity & Zakat', desc: 'Collection and distribution of Zakat and Sadaqah to the needy.' },
        { icon: <FaChild />, title: 'Youth Programs', desc: 'Sports, mentorship, and leadership workshops for young Muslims.' },
        { icon: <FaChalkboardTeacher />, title: 'New Muslim Support', desc: 'Guidance, education, and community integration for converts.' },
        { icon: <FaUserMd />, title: 'Health Clinic', desc: 'Monthly free health checkups provided by community doctors.' },
    ];

    return (
        <div className="bg-accent min-h-screen pb-20">
            {/* Header */}
            <div className="bg-primary text-white py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 relative z-10">Our Services</h1>
                <p className="text-xl opacity-90 relative z-10">Serving the spiritual and social needs of our community.</p>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-50 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary font-serif mb-3">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                            <button className="mt-auto text-secondary font-bold text-sm uppercase tracking-wider hover:underline">Learn More</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
