const Announcement = require('../models/Announcement');

// Get all active announcements
exports.getAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find({ isActive: true }).sort({ date: -1 });
        res.json(announcements);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new announcement
exports.createAnnouncement = async (req, res) => {
    try {
        const newAnnouncement = new Announcement(req.body);
        const savedAnnouncement = await newAnnouncement.save();
        res.status(201).json(savedAnnouncement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
