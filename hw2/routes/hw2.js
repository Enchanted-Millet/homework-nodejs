const express = require('express');
const { parseTime, unixTime } = require('../controllers/time');

const router = express.Router();

router.get('/api/parsetime', parseTime());
router.get('/api/unixtime', unixTime());

module.exports = router;
