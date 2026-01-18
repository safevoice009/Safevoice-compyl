"use strict";

const globals = require("globals");
const pluginJs = require("@eslint/js");
const pluginSecurity = require("eslint-plugin-security");

module.exports = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    }
  },
  pluginJs.configs.recommended,
  pluginSecurity.configs.recommended,
];
