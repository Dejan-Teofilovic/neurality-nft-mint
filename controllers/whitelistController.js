const db = require('../utils/db');
const { DB_ERROR, SUCCESS, SERVER_ERROR, TRUE, MINT_IS_FINISHED } = require('../utils/messages');

/* --------------------------- For clients ------------------------------ */

//  Add a address to a whitelist
exports.addAddressToWhitelist = async (req, res) => {
  const { address, whitelistId } = req.body;

  db.query('SELECT COUNT(id_address) AS numberOfAddresses FROM whitelist_addresses', (error, result) => {
    if (error) {
      return res.status(500).send(DB_ERROR);
    }

    console.log('# result: ', result);
  });

  // db.query(
  //   `SELECT * FROM whitelisted_addresses WHERE address = '${address}' AND id_whitelist = ${whitelistId}`,
  //   (error1, existedAddresses) => {
  //     if (error1) {
  //       return res.status(500).send(SERVER_ERROR);
  //     } else {
  //       if (existedAddresses.length > 0) {
  //         return res.status(500).send('The address is already whitelisted.');
  //       } else {
  //         db.query(
  //           `INSERT INTO whitelisted_addresses (address, id_whitelist) VALUES ('${address}', ${whitelistId})`,
  //           (error2, result) => {
  //             if (error2) {
  //               console.log('### error2: ', error2);
  //               return res.status(500).send(SERVER_ERROR);
  //             } else {
  //               return res.status(200).send(SUCCESS);
  //             }
  //           }
  //         );
  //       }
  //     }
  //   }
  // );
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
