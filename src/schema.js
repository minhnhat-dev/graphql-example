const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { UserMutation, PostMutation } = require('./graphql/mutations');
const { UserQuery, PostQuery } = require('./graphql/queries');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'root query',
  fields: {
    ping: UserQuery.ping,
    getUserById: UserQuery.getUserById,
    getUsers: UserQuery.getUsers,
    getPosts: PostQuery.getPosts,
    getPostById: PostQuery.getPostById,
    searchUsers: UserQuery.searchUsers,
  },
});

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'root mutation',
  fields: {
    logIn: UserMutation.logIn,
    createPost: PostMutation.createPost,
  },
});

const AppSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

module.exports = AppSchema;
