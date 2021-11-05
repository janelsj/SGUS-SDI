const express = require('express');
const router = express.Router();
const {handleSignUpRequest, handleLoginRequest} = require('../controllers/user.controller');

router.post('/register', handleSignUpRequest);
router.post('/login', handleLoginRequest);

module.exports = router;