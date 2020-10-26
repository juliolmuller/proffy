module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@lacussoft/standard',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  rules: {
    'camelcase': ['error', { allow: ['user_id', 'class_id'] }],
    'class-methods-use-this': 'off',
    'func-style': 'off',
    'no-console': 'off',
    'no-magic-numbers': ['error', { ignore: [3030] }],
  },
}
