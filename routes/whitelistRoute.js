const express = require('express');
const router = express.Router();
const {
  addAddressToWhitelist,
  getActiveWhitelist,
  checkAddressIsWhitelisted
} = require('../controllers/whitelistController');

router.post('/addAddressToWhitelist', addAddressToWhitelist);
router.get('/getActiveWhitelist', getActiveWhitelist);
router.post('/checkAddressIsWhitelisted', checkAddressIsWhitelisted);

module.exports = router;
