const express = require('express');
const router = express.Router();

router.use('/ping', require('./ping'));
router.use('/recipes', require('./recipes'));


module.exports = router