import type { Preview } from "@storybook/react";
import "@gaze-ui/tokens/css/variables.css";
import "@gaze-ui/react/styles/base.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
