const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controller/auth.controller');

// Public routes — no authentication required
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
