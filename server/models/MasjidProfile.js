import mongoose from 'mongoose';

const masjidProfileSchema = new mongoose.Schema({
    name: { type: String, required: true, default: 'Masjid Name' },
    history: { type: String },
    mission: { type: String },
    imamName: { type: String },
    imamBio: { type: String },
    committeeMembers: [{
        name: { type: String },
        role: { type: String },
        contact: { type: String }
    }],
    contactInfo: {
        address: { type: String },
        phone: { type: String },
        email: { type: String },
        website: { type: String },
        googleMapEmbedUrl: { type: String }
    },
    parkingInfo: { type: String },
    qiblaDirection: { type: String } // Could be degrees or descriptive
}, { timestamps: true });

export const MasjidProfile = mongoose.model('MasjidProfile', masjidProfileSchema);
