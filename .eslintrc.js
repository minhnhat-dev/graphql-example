module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'global-require': 0,
  },
};
