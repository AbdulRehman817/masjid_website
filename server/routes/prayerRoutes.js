import express from 'express';
const router = express.Router();
import { getPrayerTimings, updatePrayerTimings } from '../controllers/prayerController.js';

router.get('/prayers', getPrayerTimings);
router.post('/prayers', updatePrayerTimings);


export default router;