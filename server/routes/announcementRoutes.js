import express from 'express';
const router = express.Router();
import { getAnnouncements, createAnnouncement } from '../controllers/announcementController.js';

router.get('/announcements', getAnnouncements);
router.post('/announcements', createAnnouncement);

export default router;
