const express = require('express');
const router = express.Router();
const {
  addAddressToWhitelist,
  getActiveWhitelist,
  checkAddressIsWhitelisted,
  getAllWhitelists
} = require('../controllers/whitelistController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/addAddressToWhitelist', addAddressToWhitelist);
router.get('/getActiveWhitelist', getActiveWhitelist);
router.post('/checkAddressIsWhitelisted', checkAddressIsWhitelisted);
router.get('/getAllWhitelists', authMiddleware, getAllWhitelists);

module.exports = router;
