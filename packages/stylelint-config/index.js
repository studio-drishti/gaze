module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-rational-order"],
  plugins: ["stylelint-plugin-defensive-css"],
  rules: {
    ["selector-pseudo-class-no-unknown"]: [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    ["plugin/use-defensive-css"]: [
      true,
      {
        ["scroll-chaining"]: true,
        ["flex-wrapping"]: true,
      },
    ],
  },
};
