// eslint.config.js
import js from "@eslint/js";
import security from "eslint-plugin-security";

export default [
  js.configs.recommended,
  security.configs.recommended,
];
