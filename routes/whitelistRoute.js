const express = require('express');
const router = express.Router();
const { addAddressToWhitelist } = require('../controllers/whitelistController');

router.post('/addAddressToWhitelist', addAddressToWhitelist);

module.exports = router;
