const express = require('express');
const router = express.Router();
const {
  addAddressToWhitelist,
  getActiveWhitelist,
  checkAddressIsWhitelisted,
  getAllWhitelists
} = require('../controllers/whitelistController');

router.post('/addAddressToWhitelist', addAddressToWhitelist);
router.get('/getActiveWhitelist', getActiveWhitelist);
router.post('/checkAddressIsWhitelisted', checkAddressIsWhitelisted);
router.get('/getAllWhitelists', getAllWhitelists);

module.exports = router;
