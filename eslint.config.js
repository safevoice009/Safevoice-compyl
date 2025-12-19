import tseslint from "typescript-eslint";
import security from "eslint-plugin-security";
import reactRefresh from "eslint-plugin-react-refresh";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  // Global ignores
  {
    ignores: [
      "dist/",
      "node_modules/",
      "eslint.config.js",
      "postcss.config.js",
      "tailwind.config.js",
      "vite.config.ts",
      "tsconfig.json",
      "tsconfig.app.json"
    ],
  },

  // Base configuration for all relevant files
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },

  // Apply TypeScript configurations
  ...tseslint.configs.recommended,

  // Apply Security plugin configurations
  security.configs.recommended,

  // Apply React-specific configurations
  {
    files: ["src/**/*.{jsx,tsx}"],
    plugins: {
      "react-refresh": reactRefresh,
      "react-hooks": reactHooks,
    },
    rules: {
      "react-refresh/only-export-components": "warn",
      ...reactHooks.configs.recommended.rules,
    },
  },
];
