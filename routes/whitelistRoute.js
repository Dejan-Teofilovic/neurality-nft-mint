const express = require('express');
const router = express.Router();
const {
  addAddressToWhitelist,
  getRegisterAvailableWhitelist,
  checkAddressIsWhitelisted,
  getAllWhitelists,
  getHexProof
} = require('../controllers/whitelistController');
const authMiddleware = require('../middleware/authMiddleware');

//  For user
router.post('/addAddressToWhitelist', addAddressToWhitelist);
router.get('/getRegisterAvailableWhitelist', getRegisterAvailableWhitelist);
router.get('/getMintAvailableWhitelist', getMintAvailableWhitelist);
router.post('/checkAddressIsWhitelisted', checkAddressIsWhitelisted);
router.post('/getHexProof', getHexProof);

//  For admin
router.get('/getAllWhitelists', authMiddleware, getAllWhitelists);
router.put('/activeMintAvailableByWhitelistId/:whitelistId', authMiddleware, activeMintAvailableByWhitelistId);
router.put('/activeRegisterAvailableByWhitelistId/:whitelistId', authMiddleware, activeRegisterAvailableByWhitelistId);

module.exports = router;
