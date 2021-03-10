const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const generateNewToken = (username) => {
  const token = jwt.sign(username, process.env.SECRET_TOKEN , { expiresIn: '1800s' });
  return token;
}

module.exports = {
  generateNewToken,
}