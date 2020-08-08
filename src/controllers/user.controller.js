const createError = require('http-errors');
const { UserService } = require('../services');
const { AuthUtils } = require('../utils');

const register = async (req, res) => {
  const { email, password, password2 } = req.body;
  if (password !== password2) {
    throw new createError.BadRequest('password not match');
  }
  /* validate data */
  const count = await UserService.count(email);
  if (count) {
    throw new createError.BadRequest('Email already exist');
  }
  const user = await UserService.create({ email, password });
  console.log('user', user);
  /* register token */
  const { _id } = user;
  const token = AuthUtils.sign({ _id });
  return res.status(200).send({ user, token });
};

module.exports = {
  register,
};
