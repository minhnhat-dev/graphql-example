const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLScalarType,
  GraphQLID
} = require('graphql');
const { Kind } = require('graphql/language');

const scalarDate = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return new Date(value); // value from the client
  },
  serialize(value) {
    return value.getTime(); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    return null;
  },
});

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (user) =>  user._id,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    sex: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLString,
    },
    updatedAt: {
      type: scalarDate,
    },
  }),
});

module.exports = UserType;
