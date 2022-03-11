const express = require('express');
const router = express.Router();
const {
  adminSignIn
} = require('../controllers/adminController');

router.post('/adminSignIn', adminSignIn);

module.exports = router;
