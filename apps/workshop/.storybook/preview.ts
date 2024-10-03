import type { Preview } from "@storybook/react";

import "@gaze-ui/react/styles/base.css";
import "@gaze-ui/tokens/css/variables.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
