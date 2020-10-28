module.exports = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest',
    '@lacussoft/standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    'no-use-before-define': 'off',
  },
}
