const db = require('../utils/db');

/* --------------------------- For clients ------------------------------ */

//  Add a address to a whitelist
exports.addAddressToWhitelist = (req, res) => {
  const { address, whitelistId } = req.body;
  console.log('address: ', address);
  console.log('whitelist: ', whitelistId);
};

//  Get active whitelist
exports.getActiveWhitelist = (req, res) => {
};


/* --------------------------- For admins ------------------------------ */
//  Active a whitelist
exports.setActiveWhitelist = (req, res) => {
  const { whitelistId } = req.params;
};
