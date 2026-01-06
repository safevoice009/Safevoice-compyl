import eslint from '@eslint/js';
import security from 'eslint-plugin-security';

export default [
  eslint.configs.recommended,
  security.configs.recommended,
];
