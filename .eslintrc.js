module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'arrow-parens': 'off',
    'no-return-assign': 'off',
    'no-shadow': 'off',
    'func-names': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
