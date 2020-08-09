const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
} = require('graphql');
const { UserType, UnionUserType } = require('../types');
const { UserService } = require('../../services');

const ping = {
  type: GraphQLString,
  description: 'ping',
  args: {},
  resolve: () => 'pong',
};

const getUserById = {
  type: UserType,
  description: 'get user by id',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (_, args) => {
    const { id } = args;
    return UserService.findOne({ _id: id });
  },
};

const getUsers = {
  type: new GraphQLList(UserType),
  description: 'get user by id',
  args: {
    email: {
      name: 'email',
      type: GraphQLString,
    },
  },
  resolve: async (_, args) => {
    const { email, skip, limit } = args;
    const query = {};
    if (email) {
      query.email = email;
    }
    return UserService.find(query, { skip, limit });
  },
};

const searchUsers = {
  type: new GraphQLList(UnionUserType),
  description: 'get user by id',
  args: {
    email: {
      name: 'email',
      type: GraphQLString,
    },
  },
  resolve: (_, args) => {
    const { email } = args;
    const query = {};
    if (email) {
      query.email = email;
    }
    const arr = [
      { email: 'email1', user: 'user1' },
      { email: 'email2', user: 'user2 2' },
      { email: 'email3', user: 'user3 3' },
      { content: 'content 1', userId: 'userId1' },
      { email: 'content 2', userId: 'userId2' }
    ];

    return arr;
  },
};

module.exports = {
  ping,
  getUserById,
  getUsers,
  searchUsers,
};
