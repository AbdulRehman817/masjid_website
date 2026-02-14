
import { PrayerTiming } from "../models/PrayerTiming.js";
// Get current prayer timings (Active Daily or Specific Date)
const getPrayerTimings = async (req, res) => {
    try {
        // Logic: Find active daily timing or today's specific timing
        // For simplicity, returning the most recent active one
        const timings = await PrayerTiming.findOne({ isActive: true }).sort({ updatedAt: -1 });
        res.json(timings || {});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create or Update timings
const updatePrayerTimings = async (req, res) => {
    try {
        const newTiming = new PrayerTiming(req.body);
        const savedTiming = await newTiming.save();
        res.status(201).json(savedTiming);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export { getPrayerTimings, updatePrayerTimings };