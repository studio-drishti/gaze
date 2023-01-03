module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@studio-drishti/eslint-config-gaze`
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
