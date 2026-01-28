import globals from "globals";
import js from "@eslint/js";
import security from "eslint-plugin-security";

export default [
  {languageOptions: { globals: globals.browser }},
  js.configs.recommended,
  security.configs.recommended,
];
