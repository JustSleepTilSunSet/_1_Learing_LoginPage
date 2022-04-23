const express = require('express');
const router = express.Router();

router.post('/login', require('./user/login.js'));
router.post('/signup', require('./user/signup.js'));
router.post('/forgetPwd', require('./user/forgetPwd.js'));

module.exports = router;