const db = require('../utils/db');
const {
  DB_ERROR,
  SUCCESS,
  SERVER_ERROR,
  TRUE,
  MINT_IS_FINISHED,
  MINT_AMOUNT_FOR_WHITELIST_1,
  MINT_AMOUNT_FOR_WHITELIST_2,
  REGISTER_FINISHED
} = require('../utils/messages');

/* --------------------------- For clients ------------------------------ */

//  Add a address to a whitelist
exports.addAddressToWhitelist = (req, res) => {
  const { address, whitelistId } = req.body;

  db.query(
    `SELECT COUNT(id_address) AS numberOfAddresses FROM whitelisted_addresses WHERE id_whitelist = ${whitelistId}`,
    (error, result) => {
      //  If the number of the addresses that were whitelisted is already full.
      if (error) {
        return res.status(500).send(DB_ERROR);
      }
      if (whitelistId == 1) {
        if (result[0].numberOfAddresses == MINT_AMOUNT_FOR_WHITELIST_1) {
          return res.status(406).send(REGISTER_FINISHED);
        }
      }

      if (whitelistId == 2) {
        if (result[0].numberOfAddresses == MINT_AMOUNT_FOR_WHITELIST_2) {
          return res.status(406).send(REGISTER_FINISHED);
        }
      }

      //  Else.
      db.query(
        `SELECT * FROM whitelisted_addresses WHERE address = '${address}' AND id_whitelist = ${whitelistId}`,
        (error1, existedAddresses) => {
          if (error1) {
            return res.status(500).send(SERVER_ERROR);
          }
          //  If the address is already listed.
          if (existedAddresses.length > 0) {
            return res.status(500).send('The address is already whitelisted.');
          } else {
            db.query(
              `INSERT INTO whitelisted_addresses (address, id_whitelist) VALUES ('${address}', ${whitelistId})`,
              (error2, result2) => {
                if (error2) {
                  return res.status(500).send(SERVER_ERROR);
                }
                return res.status(200).send(SUCCESS);
              }
            );
          }
        }
      );
    });


};

//  Get active whitelist
exports.getActiveWhitelist = (req, res) => {
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

//  Check the address is whitelisted
exports.checkAddressIsWhitelisted = (req, res) => {
  const { address, whitelistId } = req.body;
  db.query(
    `SELECT * FROM whitelisted_addresses WHERE address = '${address}' AND id_whitelist = ${whitelistId}`,
    (error, results) => {
      if (error) {
        return res.status(500).send(SERVER_ERROR);
      }
      if (results.length > 0) {
        return res.status(200).send(true);
      } else {
        return res.status(200).send(false);
      }
    }
  );
};

/* --------------------------- For admins ------------------------------ */
//  Active a whitelist
exports.setActiveWhitelist = (req, res) => {
  const { whitelistId } = req.params;
  db.query(`SELECT * FROM whitelists WHERE id_whitelist = ${whitelistId}`, (error1, results) => {
    if (error1 || results.length == 0) {
      return res.status(500).send(DB_ERROR);
    }
    if (results[0].end == TRUE) {
      return res.status(406).send(MINT_IS_FINISHED);
    } else {
      db.query("UPDATE whitelists SET active = 'false'", (error2, result1) => {
        if (error2) {
          return res.status(500).send(DB_ERROR);
        }
        db.query(`UPDATE whitelists SET active = 'true' WHERE id_whitelist = ${whitelistId}`, (error3, result2) => {
          if (error3) {
            return res.status(500).send(DB_ERROR);
          }
          results[0].active = 'true';
          return res.status(200).send(results[0]);
        });
      });
    }
  });
};

//  Get all whitelists
exports.getAllWhitelists = (req, res) => {
  db.query("SELECT * FROM whitelists", (error, results) => {
    if (error) {
      return res.status(500).send(DB_ERROR);
    }
    return res.status(200).send(results);
  });
};
