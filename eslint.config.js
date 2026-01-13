// eslint.config.js
import globals from "globals";
import js from "@eslint/js";
import security from "eslint-plugin-security";

export default [
  js.configs.recommended,
  security.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
];
