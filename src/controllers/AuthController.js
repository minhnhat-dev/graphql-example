const createError = require('http-errors');
const { UsersModel } = require('../models');
const userModel = require('../models/user.model');

const register = async (req, res) => {
  const { email, password, passwords } = req.body;
  if (password !== passwords) {
    throw new createError.BadRequest('password not match');
  }
  /* validate email */
  const count = await UsersModel.count({ email });
  if (count) {
    throw new createError.BadRequest('Email already exist');
  }

  const user = await userModel.create({ email, password, passwords });
  console.log('user', user);
  
};

module.exports = {
  register,
};
