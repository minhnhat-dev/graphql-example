const jwt = require('jsonwebtoken');

const secret = 'secret';

const sign = (payload) => jwt.sign(payload, secret, { expiresIn: 10800 });
const verify = (token, cb) => jwt.verify(token, secret, {}, cb);

module.exports = {
  sign,
  verify,
};
