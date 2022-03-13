const config = require("config");
const jwt = require('jsonwebtoken');
const { SERVER_ERROR } = require('../utils/messages');

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
  console.log('# whitelistId: ', whitelistId);
};