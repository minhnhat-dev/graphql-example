const mongoose = require('mongoose');

const { Schema } = mongoose;

const Status = Object.freeze({
  active: 'active',
  inactive: 'inactive',
  deleted: 'deleted',
});

const UserSchema = new Schema(
  {
    name: {
      type: String,
      maxLength: 50,
      minLength: 1,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    links: [],
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

Object.assign(UserSchema.statics, { Status });

module.exports = mongoose.model(
  'User',
  UserSchema,
  'users',
);
