const mongoose = require('mongoose');
const dotevn = require('dotenv');

dotevn.config();
const MONGO_URI = 'mongodb://localhost:27017/pain-gain';
const database = {};

database.connectDb = async () => mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: true,
}).then(() => {
  console.log('Connect database success');
}).catch((error) => {
  console.error(`Connection error: ${error.stack}`);
  process.exit(1);
});

module.exports = database;
