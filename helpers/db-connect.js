const mongoose = require('mongoose');
require('dotenv').config();
const env = process.env;
const MONGO_URL = `${env.DATABASE_PROTICAL}://${env.DATABASE_HOST}:${env.DATABASE_PORT}/${env.DATABASE_NAME}`

const database = {}
mongoose.Promise = global.Promise;

database.connect = () => {
    mongoose.connect(MONGO_URL,{
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    },(err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('db connection is okay');
        }
    });
}

module.exports = database


