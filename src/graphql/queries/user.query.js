const {
  GraphQLString,
} = require('graphql');

const ping = {
  type: GraphQLString,
  description: 'ping',
  fields: {
    message: {
      type: GraphQLString,
    },
  },
  resolve: () => ({ message: 'pong' }),
};

module.exports = {
  ping,
};
