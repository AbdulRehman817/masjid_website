import mongoose from 'mongoose';

const PrayerTimeSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true
    },
    fajr: { type: String, required: true },
    sunrise: { type: String, required: true },
    dhuhr: { type: String, required: true },
    asr: { type: String, required: true },
    maghrib: { type: String, required: true },
    isha: { type: String, required: true },
    meta: {
        method: String,
        latitude: Number,
        longitude: Number,
        timezone: String
    }
}, { timestamps: true });

export default mongoose.model('PrayerTime', PrayerTimeSchema);
