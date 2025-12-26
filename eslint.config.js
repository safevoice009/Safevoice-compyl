// eslint.config.js
import globals from "globals";
import eslintJs from "@eslint/js";
import security from "eslint-plugin-security";

export default [
  eslintJs.configs.recommended,
  security.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    }
  }
];
