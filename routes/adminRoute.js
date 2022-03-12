const express = require('express');
const router = express.Router();
const {
  adminSignIn,
  getMerkleRoot
} = require('../controllers/adminController');

router.post('/adminSignIn', adminSignIn);
router.get('/getMerkleRoot/:whitelistId', getMerkleRoot);

module.exports = router;
