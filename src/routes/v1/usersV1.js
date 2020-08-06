const { UserController } = require('../../controllers');
const { AsyncWrapper } = require('../../utils');

module.exports = (router) => {
  router.post('/register', AsyncWrapper(UserController.register));
};
