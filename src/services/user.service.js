const { UsersModel } = require('../models');

const count = async (email) => UsersModel.countDocuments({ email });

const create = async (user) => UsersModel.create(user);

const update = (id, data) => UsersModel.updateOne({ _id: id }, { $set: data });

const findOne = async (query) => UsersModel.findOne(query).lean();

const find = async (filter = {}, options) => {
  const { skip, limit } = options;
  return UsersModel.find(filter).setOptions({ skip, limit }).lean();
};

module.exports = {
  count,
  find,
  create,
  update,
  findOne,
};
