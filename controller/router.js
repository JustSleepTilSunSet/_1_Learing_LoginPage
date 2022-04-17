const express = require('express');
const router = express.Router();

router.post('/login', require('./user/login.js'));

module.exports = router;