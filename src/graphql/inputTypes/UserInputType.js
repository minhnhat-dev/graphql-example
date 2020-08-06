const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const create = new GraphQLInputObjectType({
  name: 'InputCreateUser',
  description: 'Input create user',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLString,
    },
  },
});

const update = {
  name: 'InputUpdateUser',
  description: 'Input update user',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLString,
    },
  },
};

const deleteById = {
  name: 'InputDeleteUser',
  description: 'Input delete user',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
};

module.exports = {
  create,
  update,
  deleteById,
};
