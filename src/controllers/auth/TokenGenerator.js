const jwt = require('jsonwebtoken');

const generateNewToken = (username) => {
  return jwt.sign(username, process.env.SECRET_TOKEN, { 
    expiresIn: 1800,
   });
}

module.exports = {
  generateNewToken,
}