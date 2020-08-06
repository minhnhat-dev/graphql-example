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
  console.log(email);
  const user = await UserService.create({ email, password });
  /* register token */
  const { _id } = user;
  const token = AuthUtils.sign({ _id });
  console.log('user', user);
  return res.status(200).send({ user, token });
};

module.exports = {
  register,
};
