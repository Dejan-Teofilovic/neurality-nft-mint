const db = require('../utils/db');
const { DB_ERROR, NO_DATA, SUCCESS } = require('./messages');

/* --------------------------- For clients ------------------------------ */

//  Add a address to a whitelist
exports.addAddressToWhitelist = (req, res) => {
  const { address, whitelistId } = req.body;
  console.log('###address: ', address);
  console.log('###whitelistId: ', whitelistId);
};

//  Get active whitelist
exports.getActiveWhitelist = (req, res) => {
  console.log('###controllerName: getActiveWhitelist');
  db.query(
    "SELECT * FROM whitelists WHERE active = 'true'",
    (error, result) => {
      if (error) {
        return res.status(500).send(DB_ERROR);
      }
      if (result.length == 0) {
        return res.status(204).send(result);
      }
      return res.status(200).send(result);
    }
  );
};


/* --------------------------- For admins ------------------------------ */
//  Active a whitelist
exports.setActiveWhitelist = (req, res) => {
  const { whitelistId } = req.params;
};
