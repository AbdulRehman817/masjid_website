import mongoose from 'mongoose';

const prayerTimingSchema = new mongoose.Schema({
  // 'daily' for standard days, 'ramadan' for Ramadan specific overrides
  type: {
    type: String,
    enum: ['daily', 'ramadan'],
    default: 'daily'
  },
  date: {
    type: Date, // Useful for Ramadan or specific date overrides
    default: Date.now
  },
  fajr: { type: String, required: true },
  dhuhr: { type: String, required: true },
  asr: { type: String, required: true },
  maghrib: { type: String, required: true },
  isha: { type: String, required: true },
  jummah: { type: String }, // Specifically for Friday (Jumu'ah)

  // Ramadan specific
  sehri: { type: String },
  iftar: { type: String },

  // Meta
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

export const PrayerTiming = mongoose.model('PrayerTiming', prayerTimingSchema);
