const express = require('express');
const router = express.Router();

router.get('/route', (req, res) => {
    res.send('Ignite your business growth!');
  });

module.exports = router;
