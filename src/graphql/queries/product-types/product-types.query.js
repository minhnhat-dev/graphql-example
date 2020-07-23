const {
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt
} = require('graphql');
const { ProdTypeModel } = require('../../../models')
const {TypeProdTypes} = require('../../types')

const getProdTypeById = {
    type: TypeProdTypes,
    description: "Get ProductTypes by Id",
    args: {
        _id: {
            name: "_id",
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (root, {_id}) {
        return ProdTypeModel.findById(_id).lean()
    }
}
const getProdTypes = {
    type: new GraphQLList(TypeProdTypes),
    description: "List of all ProductTypes",
    args: {
        skip: {
            name: "skip",
            type: GraphQLInt
        },
        limit: {
            name: "limit",
            type: GraphQLInt
        },
        q: {
            name: "q",
            type: GraphQLString
        }
    },
    resolve: async function (root, args) {
        const { skip, limit, q } = args
        /* build fillter */
        return ProdTypeModel.find({}).setOptions({skip, limit}).lean()
    }
}

module.exports = {
    getProdTypeById,
    getProdTypes
}