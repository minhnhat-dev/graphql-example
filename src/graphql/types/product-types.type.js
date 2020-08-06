const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: {
    id: { type: GraphQLString },
    display_name: { type: GraphQLString },
  },
});

const TypeProdTypes = new GraphQLObjectType({
  name: 'TypeProdTypes',
  fields: {
    _id: { type: GraphQLString },
    type: { type: GraphQLString },
    code: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    deletee: { type: GraphQLString },
    author: { type: new GraphQLList(AuthorType) },
  },
});

module.exports = TypeProdTypes;
