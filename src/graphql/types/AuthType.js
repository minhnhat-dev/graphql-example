const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
const UserType = require('./UserType');

const AuthType = new GraphQLObjectType({
  name: 'AuthType',
  description: 'This represents a Auth',
  fields: {
    token: {
      type: GraphQLString,
    },
    user: {
      type: UserType,
    },
  },
});

module.exports = AuthType;
