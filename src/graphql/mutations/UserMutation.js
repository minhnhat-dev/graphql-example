const { UserInput } = require('../inputTypes');
const { UsersModel } = require('../../models');
const { UserType } = require('../types');

const createUser = {
  type: UserType,
  description: 'The mutation that allow you can create new user',
  args: {
    user: {
      name: 'user',
      type: UserInput.create,
    },
  },
  resolve: (_, {user}) => {
    /* validate data */
    
  }
};

module.exports = {
    createUser
}
