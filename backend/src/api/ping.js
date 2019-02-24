const {
    name,
    version,
    description
} = require ('../../package.json');

const express = require('express');
const router = express.Router();

const ping = (req, res) => {
    res.json({
        name, 
        description, 
        version, 
        uptime: process.uptime()
    });
};

router.get('/', ping);

module.exports = router;