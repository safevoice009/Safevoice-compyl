import security from "eslint-plugin-security";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  security.configs.recommended,
];
