const { Router } = require('express');
const userRouter = require('./usersV1');

const router = Router();

userRouter(router);
module.exports = {
  baseUrl: '/api/v1',
  router,
};
