import js from '@eslint/js';
import globals from 'globals';
import pluginSecurity from 'eslint-plugin-security';

export default [
  js.configs.recommended,
  pluginSecurity.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'security/detect-object-injection': 'off', // Often produces false positives in frontend
    },
  },
];
