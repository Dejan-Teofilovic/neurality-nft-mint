const express = require('express');
const router = express.Router();
const {
  addAddressToWhitelist,
  getRegisterAvailableWhitelist,
  checkAddressIsWhitelisted,
  getAllWhitelists,
  setActiveWhitelist,
  getHexProof
} = require('../controllers/whitelistController');
const authMiddleware = require('../middleware/authMiddleware');

//  For user
router.post('/addAddressToWhitelist', addAddressToWhitelist);
router.get('/getRegisterAvailableWhitelist', getRegisterAvailableWhitelist);
router.post('/checkAddressIsWhitelisted', checkAddressIsWhitelisted);
router.post('/getHexProof', getHexProof);

//  For admin
router.get('/getAllWhitelists', authMiddleware, getAllWhitelists);
router.put('/setActiveWhitelist/:whitelistId', authMiddleware, setActiveWhitelist);

module.exports = router;
