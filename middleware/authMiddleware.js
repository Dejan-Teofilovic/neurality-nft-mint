const jwt = require('jsonwebtoken');
const config = require('config');
const { SERVER_ERROR } = require('../utils/messages');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).send('No access token. Authorization denied.');
  }

  // Verify token
  try {
    jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        // req.user = decoded.password;
        next();
      }
    });
  } catch (err) {
    return res.status(500).send(SERVER_ERROR);
  }
};
