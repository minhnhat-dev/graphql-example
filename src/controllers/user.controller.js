const createError = require('http-errors');
const { UserService } = require('../services');

const register = async (req, res) => {
  const { email, password, passwords } = req.body;
  if (password !== passwords) {
    throw new createError.BadRequest('password not match');
  }
  /* validate email */
  const count = await UserService.count({ email });
  if (count) {
    throw new createError.BadRequest('Email already exist');
  }

  const user = await UserService.create({ email, password, passwords });
  console.log('user', user);
  return res.status(200).send({ user });
};

module.exports = {
  register,
};
