/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'lacussoft',
    'lacussoft/react-native',
    'lacussoft/typescript',
  ],
  ignorePatterns: [
    '!babel.config*',
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': 'error',
    'no-use-before-define': 'off',
    'react-native/no-raw-text': 'off',
    'react-native/no-single-element-style-arrays': 'off',
  },
}
