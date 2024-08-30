import turboPlugin from "eslint-plugin-turbo";

export default [
  {
    plugins: {
      turbo: { rules: turboPlugin.rules },
    },
    rules: {
      "turbo/no-undeclared-env-vars": "error",
    },
  },
];
