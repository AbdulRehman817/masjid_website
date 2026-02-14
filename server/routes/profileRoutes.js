import express from 'express';
const router = express.Router();
import { getProfile, updateProfile } from '../controllers/profileController.js';

router.get('/profile', getProfile);
router.post('/profile', updateProfile);

export default router;
