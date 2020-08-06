const { UsersModel } = require('../models');

const count = async (email) => UsersModel.count({ email });

const create = async (user) => UsersModel.create(user);

const update = (id, data) => UsersModel.updateOne({ _id: id }, { $set: data });

module.exports = {
  count,
  create,
  update,
};
