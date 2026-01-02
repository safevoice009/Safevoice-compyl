// eslint.config.js
import eslintJs from "@eslint/js";
import security from "eslint-plugin-security";

export default [
  eslintJs.configs.recommended,
  security.configs.recommended,
];
