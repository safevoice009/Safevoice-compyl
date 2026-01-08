import globals from "globals";
import js from "@eslint/js";
import security from "eslint-plugin-security";

export default [
  js.configs.recommended,
  security.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        es2021: true
      }
    },
    rules: {
      // Add any project-specific rule overrides here
    }
  }
];
