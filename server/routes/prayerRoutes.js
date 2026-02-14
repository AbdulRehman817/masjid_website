const express = require('express');
const router = express.Router();
const prayerController = require('../controllers/prayerController');

router.get('/', prayerController.getPrayerTimings);
router.post('/', prayerController.updatePrayerTimings);

module.exports = router;
