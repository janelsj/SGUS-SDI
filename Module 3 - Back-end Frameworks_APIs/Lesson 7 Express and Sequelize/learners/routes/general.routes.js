const express = require('express');
const router = express.Router();

router.get('/general', (request, response) => {
    response.send('You have accessed a general route.');
});

module.exports = router;
