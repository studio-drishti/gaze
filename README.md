# Gaze Design System

Gaze is a highly customizable React design system heavily inspired by [Chakra UI](https://v2.chakra-ui.com/), [Tailwind CSS](https://tailwindcss.com/) and [Mantine](https://mantine.dev/). It builds upon the concepts outlined in [Every Layout](https://every-layout.dev/) and provides a comprehensive set of primitives for building applications with composition principles.

## Getting started

Gaze ships with a set of design tokens based largely on the utility classes from Tailwind CSS. It is necessary to install both the `ui` and `tokens` package.

```bash
npm install --save @gaze-ui/react @gaze-ui/tokens
```

You may optionally wish to use the Gaze ESLint, Stylelint and TypeScript configurations as a base for your project.

```bash
npm install --save-dev @gaze-ui/tsconfig @gaze-ui/eslint-config @gaze-ui/stylelint-config
```

## Customizing

Many theme properties may be customized by setting custom CSS property in the `:root` space.

```css
:root {
  --gaze-font-family-base: "Papyrus", fantasy;
  --gaze-font-family-monospace: "Typewriter", monospace;
  --gaze-font-family-heading: var(--gaze-font-family-base);
  --gaze-h1-size: var(--gaze-font-size-9xl);
  --gaze-h1-leading: 1.5;
  --gaze-h1-weight: 800;
}
```
