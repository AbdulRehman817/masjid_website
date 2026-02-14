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
                // First try to get from our backend (overrides)
                const { data: dbTimings } = await fetchPrayerTimings();

                if (dbTimings && dbTimings.fajr) {
                    setTimings(dbTimings);
                } else {
                    // Fallback to external API
                    // Defaulting to user's location or a fixed one (e.g., London, UK for demo)
                    // Ideally, this should be configurable
                    const aladhanData = await fetchAladhanTimings('London', 'UK');
                    if (aladhanData) {
                        setTimings({
                            fajr: aladhanData.timings.Fajr,
                            dhuhr: aladhanData.timings.Dhuhr,
                            asr: aladhanData.timings.Asr,
                            maghrib: aladhanData.timings.Maghrib,
                            isha: aladhanData.timings.Isha,
                            type: 'daily' // Default type
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
            const interval = setInterval(() => calculateNextPrayer(timings), 60000); // Update every minute
            return () => clearInterval(interval);
        }
    }, [timings]);

    const calculateNextPrayer = (currentTimings) => {
        // Logic to find next prayer based on current time
        // This is a simplified version
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
        // If all passed, next is Fajr tomorrow (not handled here for brevity, but logic implies it)
        setNextPrayer(next ? next.name : 'Fajr');
    };

    if (loading) return <div className="text-center p-10">Loading Prayer Times...</div>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Prayer Timings</h2>

            {/* Daily Prayers */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                {['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'].map((prayer) => (
                    <div key={prayer} className={`p-4 rounded-lg shadow-md text-center transition-transform hover:scale-105 ${nextPrayer?.toLowerCase() === prayer ? 'bg-primary text-secondary ring-2 ring-accent' : 'bg-white'}`}>
                        <h3 className="text-xl font-semibold capitalize">{prayer}</h3>
                        <p className="text-2xl mt-2">{timings && timings[prayer]}</p>
                    </div>
                ))}
            </div>

            {/* Jumu'ah & Ramadan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                    <h3 className="text-2xl font-bold mb-4">Jumu'ah Prayer</h3>
                    <p className="text-lg">Khutbah: <span className="font-semibold">1:00 PM</span></p>
                    <p className="text-lg">Iqamah: <span className="font-semibold">{timings?.jummah || '1:30 PM'}</span></p>
                </div>

                {timings?.type === 'ramadan' && (
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                        <h3 className="text-2xl font-bold mb-4">Ramadan Schedule</h3>
                        <p className="text-lg">Sehri Ends: <span className="font-semibold">{timings?.sehri || '--:--'}</span></p>
                        <p className="text-lg">Iftar Time: <span className="font-semibold">{timings?.iftar || timings?.maghrib}</span></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PrayerTimes;
