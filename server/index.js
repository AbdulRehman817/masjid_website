import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import prayerRoutes from './routes/prayerRoutes.js';
import announcementRoutes from './routes/announcementRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/masjid_app')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes


app.use('/api/v1', prayerRoutes);
app.use('/api/v1', announcementRoutes);
app.use('/api/v1', profileRoutes);

app.get('/', (req, res) => {
    res.send('Masjid App API is running');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
