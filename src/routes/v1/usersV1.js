module.exports = (router) => {
  router.get('/register', (req, res, next) => {
    res.json({ message: 'Helloword' });
  });
};
