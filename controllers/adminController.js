const config = require("config");
const jwt = require('jsonwebtoken');
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const db = require("../utils/db");
const { SERVER_ERROR, NO_DATA } = require('../utils/messages');

exports.adminSignIn = (req, res) => {
  const { password } = req.body;

  if (password == process.env.ADMIN_PASSWORD) {
    jwt.sign(
      req.body,
      config.get('jwtSecret'),
      { expiresIn: '5 days' },
      (error, token) => {
        if (error) {
          return res.status(500).send(SERVER_ERROR);
        }
        return res.status(200).send(token);
      }
    );
  } else {
    return res.status(500).send(SERVER_ERROR);
  }
};

exports.getMerkleRoot = (req, res) => {
  const { whitelistId } = req.params;
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

      const leafNodes = addresses.map(address => keccak256(address));
      const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

      const merkleTreeStructure = merkleTree.toString();
      return res.status(200).send(merkleTreeStructure);
    }
  );
};