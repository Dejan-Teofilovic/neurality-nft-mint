const express = require('express');
const router = express.Router();
const {
  addAddressToWhitelist,
  getActiveWhitelist
} = require('../controllers/whitelistController');

router.post('/addAddressToWhitelist', addAddressToWhitelist);
router.get('/getActiveWhitelist', getActiveWhitelist);

module.exports = router;
