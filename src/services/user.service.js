const { UsersModel } = require('../models');

const count = async (email) => UsersModel.countDocuments({ email });

const create = async (user) => UsersModel.create(user);

const update = (id, data) => UsersModel.updateOne({ _id: id }, { $set: data });

const findOne = async (query) => UsersModel.findOne(query).lean();

module.exports = {
  count,
  create,
  update,
  findOne,
};
