import React, { useState, useEffect } from 'react';
import { fetchPrayerTimings, fetchAladhanTimings } from '../services/api';
import moment from 'moment';

const PrayerTimes = () => {
    const [timings, setTimings] = useState(null);
    const [loading, setLoading] = useState(true);
    const [nextPrayer, setNextPrayer] = useState(null);

    useEffect(() => {
        const loadTimings = async () => {
            try {
                const { data: dbTimings } = await fetchPrayerTimings();
                if (dbTimings && dbTimings.fajr) {
                    setTimings(dbTimings);
                } else {
                    const aladhanData = await fetchAladhanTimings('London', 'UK');
                    if (aladhanData) {
                        setTimings({
                            fajr: aladhanData.timings.Fajr,
                            dhuhr: aladhanData.timings.Dhuhr,
                            asr: aladhanData.timings.Asr,
                            maghrib: aladhanData.timings.Maghrib,
                            isha: aladhanData.timings.Isha,
                            type: 'daily'
                        });
                    }
                }
            } catch (error) {
                console.error("Failed to load prayer times", error);
            } finally {
                setLoading(false);
            }
        };
        loadTimings();
    }, []);

    useEffect(() => {
        if (timings) {
            calculateNextPrayer(timings);
            const interval = setInterval(() => calculateNextPrayer(timings), 60000);
            return () => clearInterval(interval);
        }
    }, [timings]);

    const calculateNextPrayer = (currentTimings) => {
        const now = moment();
        const prayers = [
            { name: 'Fajr', time: moment(currentTimings.fajr, 'HH:mm') },
            { name: 'Dhuhr', time: moment(currentTimings.dhuhr, 'HH:mm') },
            { name: 'Asr', time: moment(currentTimings.asr, 'HH:mm') },
            { name: 'Maghrib', time: moment(currentTimings.maghrib, 'HH:mm') },
            { name: 'Isha', time: moment(currentTimings.isha, 'HH:mm') },
        ];
        let next = null;
        for (const prayer of prayers) {
            if (now.isBefore(prayer.time)) {
                next = prayer;
                break;
            }
        }
        setNextPrayer(next ? next.name : 'Fajr');
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center text-4xl font-serif text-primary">Loading Sacred Timings...</div>;

    return (
        <div className="min-h-screen pt-12 pb-24 px-6 md:px-12 bg-accent">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-6xl md:text-8xl font-bold text-primary font-serif drop-shadow-sm">Prayer Schedule</h1>
                    <p className="text-2xl text-gray-600 font-light">"Indeed, prayer has been decreed upon the believers a decree of specified times."</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Massive Next Prayer Card */}
                    <div className="glass-card p-16 rounded-[3rem] text-center border-4 border-secondary/20 bg-gradient-to-br from-primary to-green-900 text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl uppercase tracking-[0.2em] font-light mb-8 text-secondary">Next Prayer</h3>
                            <h2 className="text-8xl md:text-[9rem] font-bold font-serif mb-6 leading-none">
                                {nextPrayer}
                            </h2>
                            <p className="text-5xl md:text-6xl font-light opacity-90">
                                {timings[nextPrayer?.toLowerCase()]}
                            </p>
                            <div className="mt-12 text-lg uppercase tracking-widest opacity-75">
                                Prepare your heart
                            </div>
                        </div>
                    </div>

                    {/* Other Prayers List */}
                    <div className="space-y-6">
                        {['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'].map((prayer) => (
                            <div key={prayer} className={`p-8 rounded-3xl flex items-center justify-between transition-all duration-300 transform hover:scale-102 ${nextPrayer?.toLowerCase() === prayer ? 'bg-white border-2 border-secondary shadow-xl scale-105 z-10' : 'bg-white/60 hover:bg-white shadow-sm'}`}>
                                <h3 className="text-3xl md:text-4xl capitalize font-serif text-primary">{prayer}</h3>
                                <p className={`text-3xl md:text-4xl font-bold ${nextPrayer?.toLowerCase() === prayer ? 'text-secondary' : 'text-gray-700'}`}>
                                    {timings[prayer]}
                                </p>
                            </div>
                        ))}

                        {/* Jumu'ah Box */}
                        <div className="mt-12 bg-secondary p-8 rounded-3xl text-center shadow-lg">
                            <h3 className="text-3xl font-bold text-white mb-2">Jumu'ah Prayer</h3>
                            <div className="text-xl text-white/90 font-medium">
                                Khutbah: 1:00 PM • Iqamah: {timings?.jummah || '1:30 PM'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrayerTimes;
