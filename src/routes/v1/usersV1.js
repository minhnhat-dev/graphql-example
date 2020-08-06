module.exports = (router) => {
  router.get('/users', (req, res, next) => {
    res.json({ message: 'Helloword' });
  });
};
