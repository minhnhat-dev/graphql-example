'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Status = Object.freeze({
  active: 'active',
  inactive: 'inactive',
  deleted: 'deleted'
})

const ProductTypeSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      unique: true,
      maxLength: 50,
      minLength: 1
    },
    code: {
      type: String,
      required: true,
      unique: true,
      maxLength: 20,
      minLength: 1
    },
    description: { type: String, maxLength: 200 },
    status: {
      type: String,
      default: Status.inactive,
      required: true,
      enum: Object.values(Status)
    },
    author: {
      id: { type: String, required: true },
      display_name: { type: String }
    },
    deletee: Boolean
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'creation_date', updatedAt: 'modification_date' },
    toJSON: {
      virtuals: true
    }
  }
)

Object.assign(ProductTypeSchema.statics, { Status })

module.exports = mongoose.model(
  'ProductTypes',
  ProductTypeSchema,
  'product-types'
)
