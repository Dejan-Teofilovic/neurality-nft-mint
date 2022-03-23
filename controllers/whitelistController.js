const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const db = require('../utils/db');
const {
  DB_ERROR,
  SUCCESS,
  SERVER_ERROR,
  FALSE,
  MINT_AMOUNT_FOR_WHITELIST_1,
  MINT_AMOUNT_FOR_WHITELIST_2,
  REGISTER_FINISHED
} = require('../utils/messages');

/* --------------------------- For clients ------------------------------ */

//  Add a address to a whitelist
exports.addAddressToWhitelist = (req, res) => {
  const { address, whitelistId } = req.body;

  //  Check that the whitelist is registerable.
  db.query(
    `SELECT * FROM whitelists WHERE id_whitelist = ${whitelistId}`,
    (error, results) => {
      if (error) {
        return res.status(500).send(DB_ERROR);
      }
      if (results.length > 0) {
        if (results[0].register_available == FALSE) {
          return res.status(406).send(REGISTER_FINISHED);
        }
      } else {
        return res.status(404).send('The whitelist isn\'t existed.');
      }
    }
  );

  //  Check that the number of the addresses of that whitelist is almost full.
  db.query(
    `SELECT COUNT(id_address) AS numberOfAddresses FROM whitelisted_addresses WHERE id_whitelist = ${whitelistId}`,
    (error, results) => {
      //  If the number of the addresses that were whitelisted is already full.
      if (error) {
        return res.status(500).send(DB_ERROR);
      }

      if (whitelistId == 1) {
        if (results[0].numberOfAddresses == MINT_AMOUNT_FOR_WHITELIST_1 - 1) {
          db.query(
            `UPDATE whitelists SET register_available = 'false' WHERE id_whitelist = ${whitelistId}`,
            (error) => {
              if (error) {
                return res.status(500).send(DB_ERROR);
              }
            }
          );
        }
      }

      if (whitelistId == 2) {
        if (results[0].numberOfAddresses == MINT_AMOUNT_FOR_WHITELIST_2 - 1) {
          db.query(
            `UPDATE whitelists SET register_available = 'false' WHERE id_whitelist = ${whitelistId}`,
            (error) => {
              if (error) {
                return res.status(500).send(DB_ERROR);
              }
            }
          );
        }
      }

      //  Else.
      db.query(
        `SELECT * FROM whitelisted_addresses WHERE address = '${address}'`,
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

//  Get a whitelist that is available on register
exports.getRegisterAvailableWhitelist = (req, res) => {
  db.query(
    "SELECT * FROM whitelists WHERE register_available = 'true'",
    (error, results) => {
      if (error) {
        return res.status(500).send(DB_ERROR);
      }
      if (results.length == 0) {
        return res.status(204).send(results);
      }
      return res.status(200).send(results[0]);
    }
  );
};

//  Get a whitelist that is available on mint
exports.getMintAvailableWhitelist = (req, res) => {
  db.query(
    "SELECT * FROM whitelists WHERE mint_available = 'true'",
    (error, results) => {
      if (error) {
        return res.status(500).send(DB_ERROR);
      }
      if (results.length == 0) {
        return res.status(204).send(results);
      }
      return res.status(200).send(results[0]);
    }
  );
};

//  Check the address is whitelisted
exports.checkAddressIsWhitelisted = (req, res) => {
  const { address } = req.body;
  db.query(
    `SELECT * FROM whitelisted_addresses WHERE address = '${address}'`,
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

//  Get hex proof of the address
exports.getHexProof = (req, res) => {
  const { address, whitelistId } = req.body;
  db.query(
    `SELECT address FROM whitelisted_addresses WHERE id_whitelist = ${whitelistId}`,
    (error, results) => {
      if (error) {
        return res.status(500).send(SERVER_ERROR);
      }

      if (results.length == 0) {
        return res.status(500).send(NO_DATA);
      }

      const addresses = results.map(resultItem => resultItem.address);
      const leafNodes = addresses.map(addr => keccak256(addr));

      const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
      console.log('# address: ', address);
      console.log('# merkleTree: ', merkleTree.toString());

      const hexProof = merkleTree.getHexProof(keccak256(address));

      return res.status(200).send(hexProof);
    }
  );
};

/* --------------------------- For admins ------------------------------ */
//  Set the value of 'mint_available' of a whitelist as 'true' or set its value of all whitelists as 'false'
exports.activeMintAvailableByWhitelistId = (req, res) => {
  const { whitelistId } = req.params;

  db.query("UPDATE whitelists SET mint_available = 'false'", (error2, result1) => {
    if (error2) {
      return res.status(500).send(DB_ERROR);
    }
    if (whitelistId) {
      db.query(
        `UPDATE whitelists SET mint_available = 'true', register_available = 'false' WHERE id_whitelist = ${whitelistId}`,
        (error3, results) => {
          if (error3) {
            return res.status(500).send(DB_ERROR);
          }
          results[0].mint_available = 'true';
          return res.status(200).send(results[0]);
        }
      );
    } else {
      return res.status(200).send(null);
    }
  });
};

//  Set the value of 'register_available' of a whitelist as 'true'
exports.activeRegisterAvailableByWhitelistId = (req, res) => {
  const { whitelistId } = req.params;

  //  Check that the whitelist of that whitelistId is full
  db.query(
    `SELECT COUNT(id_address) AS numberOfAddresses FROM whitelisted_addresses WHERE id_whitelist = ${whitelistId}`,
    (error, results) => {
      if (error) {
        return res.status(500).send(DB_ERROR);
      }
      if (whitelistId == 1) {
        if (results[0].numberOfAddresses == MINT_AMOUNT_FOR_WHITELIST_1) {
          return res.status(406).send(REGISTER_FINISHED);
        }
      }
      if (whitelistId == 2) {
        if (results[0].numberOfAddresses == MINT_AMOUNT_FOR_WHITELIST_2) {
          return res.status(406).send(REGISTER_FINISHED);
        }
      }
    }
  );

  //  If the whitelist isn't full yet, set its register_available as 'true'
  db.query(`UPDATE whitelists SET register_available = 'true' WHERE id_whitelist = ${whitelistId}`, (error3, results) => {
    if (error3) {
      return res.status(500).send(DB_ERROR);
    }
    results[0].register_available = 'true';
    return res.status(200).send(results[0]);
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
