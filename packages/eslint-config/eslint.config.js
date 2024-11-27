import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import n from "eslint-plugin-n";
import perfectionist from "eslint-plugin-perfectionist";
import react from "eslint-plugin-react";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "*.css",
      "*.scss",
      "*.pdf",
      "*.svg",
      "**/dist/**",
      "**/coverage/**",
      "**/node_modules/**",
    ],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
  eslint.configs.recommended,
  n.configs["flat/recommended"],
  perfectionist.configs["recommended-natural"],
  sonarjs.configs.recommended,
  unicorn.configs["flat/recommended"],
  {
    rules: {
      "logical-assignment-operators": [
        "error",
        "always",
        { enforceForIfStatements: true },
      ],
      "n/no-unsupported-features/node-builtins": [
        "error",
        { allowExperimental: true },
      ],
      "no-useless-rename": "error",
      "object-shorthand": "error",
      "operator-assignment": "error",
      "perfectionist/sort-objects": [
        "error",
        {
          order: "asc",
          partitionByComment: true,
          type: "natural",
        },
      ],
      "sonarjs/no-empty-function": "off",
      "sonarjs/no-small-switch": "off",
      "sonarjs/no-unused-expressions": "off",
      "sonarjs/todo-tag": "off",
      "unicorn/prevent-abbreviations": "off",
    },
  },
  ...tseslint.config({
    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.*s", "eslint.config.js"],
        },
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { caughtErrors: "all" }],
    },
  }),
  {
    files: ["**/*.{jsx,tsx}"],
    // TODO: Support eslint-plugin-react-hooks (https://github.com/facebook/react/pull/28773)
    extends: [jsxA11y.flatConfigs.recommended, react.configs.flat.recommended],
    rules: {
      "react/jsx-sort-props": ["warn"],
      "react/prop-types": "off",
    },
  },
  // TODO: Support eslint-plugin-storybook (https://github.com/storybookjs/eslint-plugin-storybook/issues/157)
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  eslintConfigPrettier,
);
