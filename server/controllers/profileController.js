import { MasjidProfile } from '../models/MasjidProfile.js';

// Get Profile
const getProfile = async (req, res) => {
    try {
        const profile = await MasjidProfile.findOne();
        res.json(profile || {});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Profile (Create if not exists)
const updateProfile = async (req, res) => {
    try {
        let profile = await MasjidProfile.findOne();
        if (profile) {
            Object.assign(profile, req.body);
            await profile.save();
        } else {
            profile = new MasjidProfile(req.body);
            await profile.save();
        }
        res.json(profile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export { getProfile, updateProfile };
