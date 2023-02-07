module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@gaze/eslint-config`
  extends: ["turbo", "@gaze"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
