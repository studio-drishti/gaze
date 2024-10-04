import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@gaze-ui/react";

const meta: Meta<typeof Box> = {
  component: Box,
  parameters: {
    layout: "centered",
  },
  title: "Layouts/Box",
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Simple: Story = {
  args: {
    background: "var(--gaze-color-lime-300)",
    borderRadius: "var(--gaze-radius-base)",
    padding: "var(--gaze-space-80)",
  },
};
