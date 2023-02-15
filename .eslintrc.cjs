module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@gaze-ui/eslint-config`
  extends: ["turbo", "@gaze-ui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
