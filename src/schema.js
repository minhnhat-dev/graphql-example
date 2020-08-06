const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const mutation = require('./graphql/mutations');
const queries = require('./graphql/queries');

const AppSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries,
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation,
  }),
});

module.exports = AppSchema;
