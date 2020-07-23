const {ProdTypeModel} = require('../../../models')
const _ = require('lodash')

const { TypeProdTypes } = require('../../types')
const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean
} = require('graphql')

const createProductType = {
    type: TypeProdTypes,
    description: "Create product types",
    args: {
        type: {
            name: "type",
            type: new GraphQLNonNull(GraphQLString)
        },
        code: {
            name: "code",
            type: new GraphQLNonNull(GraphQLString)
        },
        status: {
            name: "status",
            type: new GraphQLNonNull(GraphQLString)
        },
    },
    resolve: async function (root, args) {
        args.author = {
            id: "some string",
            display_name: "name"
        }
        return ProdTypeModel.create(args)
    }
}

const updateProductType = {
    type: TypeProdTypes,
    description: "Update product types",
    args: {
        _id: {
            name: "_id",
            type: new GraphQLNonNull(GraphQLID)
        },
        type: {
            name: "type",
            type: new GraphQLNonNull(GraphQLString)
        },
        code: {
            name: "code",
            type: new GraphQLNonNull(GraphQLString)
        },
        status: {
            name: "status",
            type: new GraphQLNonNull(GraphQLString)
        },
    },
    resolve: async function (root, args) {
        const {_id, input } = args;
        const data = _.omit(input, '_id')
        return ProdTypeModel.findOneAndUpdate({_id}, data, {new: true})
    }
}

const deleteProductType = {
    type: GraphQLBoolean,
    description: "Delete product types",
    args: {
        _id: {
            name: "_id",
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: async function (root, {_id}) {
        await ProdTypeModel.deleteOne({_id})
        return true
    }
}

module.exports = {
    createProductType,
    updateProductType,
    deleteProductType
}