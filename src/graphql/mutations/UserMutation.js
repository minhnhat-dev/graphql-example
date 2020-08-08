const {
  GraphQLString,
} = require('graphql');
const createError = require('http-errors');
const { UserService } = require('../../services');
const { AuthUtils, BcryptUtils } = require('../../utils');
const { AuthType } = require('../types');

const logIn = {
  type: AuthType,
  description: 'The mutation that allow you can create new user',
  args: {
    email: {
      name: 'email',
      type: GraphQLString,
    },
    password: {
      name: 'password',
      type: GraphQLString,
    },
  },
  resolve: async (_, args) => {
    /* validate data */
    const { email, password } = args;
    const user = await UserService.findOne({ email });
    if (!user) {
      throw new createError.BadRequest('Email is valid');
    }

    /* validate password */
    const isValid = BcryptUtils.comparePassword(password, user.password);
    if (!isValid) {
      throw new createError.BadRequest('Password not valid');
    }
    console.log('user', user);
    /* general token */
    const { _id } = user;
    const token = AuthUtils.sign({ _id });
    return {
      token,
      user,
    };
  },
};

module.exports = {
  logIn,
};
