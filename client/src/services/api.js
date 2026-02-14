import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api/v1', // Updated to match server v1 routes
});

export const fetchPrayerTimings = () => API.get('/prayers');
export const fetchAnnouncements = () => API.get('/announcements');
export const fetchProfile = () => API.get('/profile');

// Fallback to Aladhan API if DB is empty or for future dates
export const fetchAladhanTimings = async (city, country, method = 2) => {
    try {
        const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity`, {
            params: {
                city,
                country,
                method,
            },
        });
        return response.data.data;
    } catch (error) {
        console.error("Error fetching Aladhan timings:", error);
        return null;
    }
};

export default API;
