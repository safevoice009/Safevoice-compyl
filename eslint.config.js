// @ts-check

const eslint = require('@eslint/js');
const security = require('eslint-plugin-security');
const globals = require('globals');

module.exports = [
  eslint.configs.recommended,
  security.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
];
