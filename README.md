# Gaze Design System

Gaze is a highly customizable React design system heavily inspired by Chakra UI and Tailwind CSS. Gaze was conceived in response to React 18's compatibility issues with CSS-in-JS libraries and a general crisis about web standards and the need for runtime styling solutions.

## Getting started

Gaze ships with a comprehensive set of design tokens based largely on utilities from Tailwind CSS. It is necessary to install both the `ui` and `tokens` package.

```bash
npm install --save @gaze/react @gaze/tokens
```

You may optionally wish to use the Gaze ESLint and TypeScript configurations as a base for your project.

```bash
npm install --save-dev @gaze/tsconfig @gaze/eslint-config
```

## Customizing

Every component may be customized by setting a custom CSS property in the `:root` space. For example...

```css
:root {
  --h1-font-size: 2000px;
}
```
