import globals from "globals";
import pluginJs from "@eslint/js";
import pluginSecurity from "eslint-plugin-security";

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginSecurity.configs.recommended,
];
