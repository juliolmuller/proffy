module.exports = {
  root: true,
  env: {
    'react-native/react-native': true,
  },
  extends: [
    '@lacussoft',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: [
    '!babel.config*',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-native',
  ],
  rules: {
    'no-use-before-define': 'off',
    'object-curly-newline': ['error', { ImportDeclaration: { multiline: true, minProperties: 9 } }],
  },
}
