const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { UserMutation } = require('./graphql/mutations');
const { UserQuery } = require('./graphql/queries');
const {UpperCaseDirective} = require('./graphql/directives');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'root query',
  fields: {
    ping: UserQuery.ping,
  },
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'root mutation',
  fields: {
    logIn: UserMutation.logIn,
  },
});

const AppSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

module.exports = AppSchema;
