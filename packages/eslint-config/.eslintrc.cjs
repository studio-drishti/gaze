module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        project: [
          "tsconfig.json",
          "apps/*/tsconfig.json",
          "packages/*/tsconfig.json",
        ],
      },
      node: true,
    },
  },
  ignorePatterns: ["*.css", "*.scss", "*.pdf", "*.svg", "**/dist/**"],
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jsdoc/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
  ],
  rules: {
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-null": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/no-useless-undefined": "off",
    // PropTypes are unnecessary with TypeScript.
    "react/prop-types": "off",
    "react/jsx-sort-props": ["warn"],
    "sonarjs/no-small-switch": "off",
    "no-console": ["error"],
    "prefer-template": ["error"],
    "no-use-before-define": ["error"],
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "import/order": [
      "warn",
      {
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "before",
          },
        ],
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: [
          "tsconfig.json",
          "apps/*/tsconfig.json",
          "packages/*/tsconfig.json",
        ],
      },
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/stylistic",
        "plugin:import/typescript",
        "plugin:jsdoc/recommended-typescript",
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
      },
    },
    {
      files: ["*.{js,cjs}"],
      rules: {
        "unicorn/prefer-module": "off",
        "import/no-default-export": "off",
      },
    },
    {
      files: ["*.{test,stories}.{ts,tsx,js,jsx}"],
      rules: {
        "react/display-name": "off",
        "react/no-unescaped-entities": "off",
        "sonarjs/no-duplicate-string": "off",
      },
    },
    {
      files: ["*.test.{ts,tsx,js,jsx}"],
      extends: [
        "plugin:testing-library/react",
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:jest-dom/recommended",
        "plugin:jest-formatting/recommended",
      ],
    },
    {
      files: ["*.stories.{ts,tsx,js,jsx}"],
      extends: ["plugin:storybook/recommended"],
      rules: {
        "import/no-default-export": "off",
      },
    },
    // Ensure that the prettier plugin is last so that it may overwrite any conflicting rules enabled above.
    {
      files: ["*.{ts,tsx,js,jsx,cjs,mjs}"],
      extends: ["prettier"],
    },
  ],
};
