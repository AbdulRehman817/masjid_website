import React, { useState, useEffect } from 'react';
import { fetchAnnouncements } from '../services/api';
import { Bell, Calendar, Info } from 'lucide-react';
import moment from 'moment';

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        const loadAnnouncements = async () => {
            try {
                const { data } = await fetchAnnouncements();
                setAnnouncements(data);
            } catch (error) {
                console.error("Failed to load announcements", error);
            }
        };
        loadAnnouncements();
    }, []);

    const getIcon = (type) => {
        switch (type) {
            case 'event': return <Calendar className="w-6 h-6 text-blue-500" />;
            case 'alert': return <Bell className="w-6 h-6 text-red-500" />;
            default: return <Info className="w-6 h-6 text-green-500" />;
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Community Announcements</h2>

            {announcements.length === 0 ? (
                <p className="text-center text-gray-500">No active announcements at the moment.</p>
            ) : (
                <div className="space-y-4">
                    {announcements.map((item) => (
                        <div key={item._id} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 hover:shadow-lg transition-shadow">
                            <div className="mt-1">{getIcon(item.type)}</div>
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <span className="text-sm text-gray-400">{moment(item.date).format('MMM D, YYYY')}</span>
                                </div>
                                <p className="text-gray-700">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Announcements;
