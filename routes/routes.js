const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/users', (req, res) => {
  res.send('All users will be listed here');
});

module.exports = router;