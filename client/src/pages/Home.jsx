import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold font-serif mb-4"
                    >
                        {t('hero.welcome')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-2xl text-gray-200"
                    >
                        {t('hero.subtitle')}
                    </motion.p>
                </div>
            </section>

            {/* Prayer Times Preview Section */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 text-secondary font-serif">Today's Prayer Times</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {/* Placeholder Cards */}
                    {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((prayer) => (
                        <div key={prayer} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-semibold text-gray-600">{prayer}</h3>
                            <p className="text-2xl font-bold text-primary mt-2">--:--</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
