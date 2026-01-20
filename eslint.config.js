const globals = require("globals");
const js = require("@eslint/js");
const security = require("eslint-plugin-security");

module.exports = [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  security.configs.recommended,
];
