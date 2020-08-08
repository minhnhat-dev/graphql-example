const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const secret = 'secret';

const sign = (payload) => jwt.sign(payload, secret, { expiresIn: 10800 });
const verify = (token, cb) => jwt.verify(token, secret, {}, cb);
const authenticate = (req, res, next) => {
  const parts = req.header.get('Authorization').split(' ');
  if (parts.length !== 2) {
    throw new createError.Unauthorized('Unauthorized');
  }

  const preAuth = parts[0];
  if (preAuth !== 'Bearer') {
    throw new createError.Unauthorized('Authorization formated [Bearer token]');
  }
  const token = parts[1];
  return verify(token, (error, thisToken) => {
    if (error) {
      throw new createError.Unauthorized('Unauthorized');
    } else {
      req.token = thisToken;
      return next();
    }
  });
};
module.exports = {
  sign,
  verify,
  authenticate,
};
