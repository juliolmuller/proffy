module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'lacussoft',
    'lacussoft/typescript',
  ],
  rules: {
    'camelcase': ['error', { allow: ['purge_dotenv', 'user_id', 'class_id'] }],
    'class-methods-use-this': 'off',
    'func-style': 'off',
    'no-console': 'off',
    'no-magic-numbers': ['error', { ignore: [8081] }],
  },
}
